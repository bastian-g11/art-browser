import prisma from '@config/prisma';
import { Resolver } from 'types';

const ArtworkResolvers: Resolver = {
  Artwork: {
    users: async (parent, args) => {
      const users = await prisma.user.findMany({
        where: {
          artworks: {
            some: {
              id: parent.id,
            },
          },
        },
      });
      return users;
    },
  },
  Query: {
    getArtwork: async (parent, args) => {
      const artwork = await prisma.artwork.findUnique({
        where: {
          id: args.id,
        },
      });
      return artwork;
    },
    getArtworks: async (parent, args) => {
      const artworks = await prisma.artwork.findMany();
      return artworks;
    },
  },
  Mutation: {
    createArtwork: async (parent, args) => {
      const newArtwork = await prisma.artwork.create({
        data: {
          ...args.data,
        },
      });
      return newArtwork;
    },
    updateArtwork: async (parent, args) => {
      const updatedArtwork = await prisma.artwork.update({
        where: {
          id: args.id,
        },
        data: {
          ...args.data,
        },
      });
      return updatedArtwork;
    },
    deleteArtwork: async (parent, args) => {
      const deletedArtwork = await prisma.artwork.delete({
        where: {
          id: args.id,
        },
      });
      return deletedArtwork;
    },
    // TODO
    /**
     * Create resolver to get which of the artworks from the
     * API call are marked as favorites
     */
  },
};

export { ArtworkResolvers };
