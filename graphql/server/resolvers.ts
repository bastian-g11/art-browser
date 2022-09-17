import { Resolver } from 'types';
import { model1Resolvers } from '@graphql/server/model1/resolvers';

const globalResolvers: Resolver[] = [model1Resolvers];

export { globalResolvers };
