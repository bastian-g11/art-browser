import { Resolver } from 'types';
import { UserResolvers } from '@graphql/server/user/resolvers';
import { ArtworkResolvers } from '@graphql/server/artwork/resolvers';
import { AccountResolvers } from '@graphql/server/account/resolvers';

const globalResolvers: Resolver[] = [
  UserResolvers,
  ArtworkResolvers,
  AccountResolvers,
];

export { globalResolvers };
