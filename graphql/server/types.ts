import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server-micro';
import { UserTypes } from '@graphql/server/user/types';

const CommonTypes = gql`
  scalar Date
`;

const globalTypes: DocumentNode[] = [CommonTypes, UserTypes];

export { globalTypes };
