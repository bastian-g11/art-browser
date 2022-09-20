import prisma from '@config/prisma';
import { Resolver } from 'types';

// FIXME: Abstract to a different file
const accountReturnedFields = {
  id: true,
  email: true,
  user: true,
  user_id: true,
};

const UserResolvers: Resolver = {
  User: {
    artworks: async (parent, args) => {
      const artworks = await prisma.artwork.findMany({
        where: {
          users: {
            some: {
              id: parent.id,
            },
          },
        },
      });
      return artworks;
    },
    accounts: async (parent, args) => {
      const accounts = await prisma.account.findMany({
        where: {
          user_id: {
            equals: parent.id,
          },
        },
        select: accountReturnedFields,
      });
      return accounts;
    },
  },
  Query: {
    getUser: async (parent, args) => {
      const user = await prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
      return user;
    },
    getUsers: async (parent, args) => {
      const users = await prisma.user.findMany();
      return users;
    },
    getFavoriteArtworksIn: async (parent, args) => {
      console.log('Entra');

      const favoriteArtworks = await prisma.artwork.findMany({
        where: {
          api_id: {
            in: [...args.api_ids],
          },
          users: {
            some: {
              id: args.id,
            },
          },
        },
      });

      return favoriteArtworks;
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const newUser = await prisma.user.create({
        data: {
          ...args.data,
        },
      });
      return newUser;
    },
    updateUser: async (parent, args) => {
      const updatedUser = await prisma.user.update({
        where: {
          id: args.id,
        },
        data: {
          ...args.data,
        },
      });
      return updatedUser;
    },
    deleteUser: async (parent, args) => {
      const deletedUser = await prisma.user.delete({
        where: {
          id: args.id,
        },
      });
      return deletedUser;
    },
    addArtworkToUser: async (parent, args) => {
      const updatedUser = await prisma.user.update({
        where: {
          id: args.id,
        },
        data: {
          artworks: {
            connectOrCreate: [
              {
                where: {
                  api_id: args.artwork.api_id,
                },
                create: {
                  ...args.artwork,
                },
              },
            ],
          },
        },
      });

      return updatedUser;
    },
    removeArtworkFromUser: async (parent, args) => {
      const updatedUser = await prisma.user.update({
        where: {
          id: args.id,
        },
        data: {
          artworks: {
            disconnect: {
              api_id: args.artwork_id,
            },
          },
        },
      });

      return updatedUser;
    },
  },
};

export { UserResolvers };
