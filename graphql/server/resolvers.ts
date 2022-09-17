import { Resolver } from 'types';
import { UserResolvers } from '@graphql/server/user/resolvers';
import { ArtworkResolvers } from '@graphql/server/artwork/resolvers';

const globalResolvers: Resolver[] = [UserResolvers, ArtworkResolvers];

export { globalResolvers };
