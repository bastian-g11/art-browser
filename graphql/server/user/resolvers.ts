import prisma from '@config/prisma';
import { Resolver } from 'types';

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
              id: args.artwork_id,
            },
          },
        },
      });

      return updatedUser;
    },
  },
};

export { UserResolvers };
