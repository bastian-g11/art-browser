import { Resolver } from 'types';
import { UserResolvers } from '@graphql/server/user/resolvers';

const globalResolvers: Resolver[] = [UserResolvers];

export { globalResolvers };
