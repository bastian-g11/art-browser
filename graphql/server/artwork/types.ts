import { gql } from 'apollo-server-micro';

const ArtworkTypes = gql`
  type Artwork {
    id: ID
    title: String
    author: String
    link: String
    site_link: String
    users: [User]
  }

  input ArtworkCreateInput {
    title: String!
    author: String!
    link: String!
    site_link: String!
  }

  input ArtworkUpdateInput {
    title: String
    author: String
    link: String
    site_link: String
  }

  type Query {
    getArtwork(id: String): Artwork
    getArtworks: [Artwork]
  }

  type Mutation {
    createArtwork(data: ArtworkCreateInput): Artwork
    updateArtwork(id: String, data: ArtworkUpdateInput): Artwork
    deleteArtwork(id: String): Artwork
  }
`;

export { ArtworkTypes };
