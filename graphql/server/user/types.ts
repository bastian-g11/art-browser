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

  input ArtworkInput {
    api_id: String!
    title: String!
    author: String!
    img_link: String!
    site_link: String!
  }

  type Query {
    getUser(id: String): User
    getUsers: [User]
  }

  type Mutation {
    createUser(data: UserCreateInput): User
    updateUser(id: String, data: UserUpdateInput): User
    deleteUser(id: String): User
    addArtworkToUser(id: String, artwork: ArtworkInput): User
    removeArtworkFromUser(id: String, artwork_id: String): User
  }
`;

export { UserTypes };
