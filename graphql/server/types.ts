import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server-micro';
import { UserTypes } from '@graphql/server/user/types';
import { ArtworkTypes } from '@graphql/server/artwork/types';
import { AccountTypes } from '@graphql/server/account/types';

const CommonTypes = gql`
  scalar Date
`;

const globalTypes: DocumentNode[] = [
  CommonTypes,
  UserTypes,
  ArtworkTypes,
  AccountTypes,
];

export { globalTypes };
