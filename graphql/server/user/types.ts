import { gql } from 'apollo-server-micro';

const UserTypes = gql`
  type User {
    id: ID
    name: String
    accounts: [Account]
    artworks: [Artwork]
  }

  input UserCreateInput {
    name: String!
  }

  input UserUpdateInput {
    name: String
  }

  type Query {
    getUser(id: String): User
    getUsers: [User]
  }

  type Mutation {
    createUser(data: UserCreateInput): User
    updateUser(id: String, data: UserUpdateInput): User
    deleteUser(id: String): User
    addTrainingsToUser(id: String, trainings_ids: [String]): User
    removeTrainingsFromUser(id: String, trainings_ids: [String]): User
  }
`;

export { UserTypes };
