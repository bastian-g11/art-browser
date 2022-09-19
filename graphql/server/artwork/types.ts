import { gql } from 'apollo-server-micro';

const ArtworkTypes = gql`
  type Artwork {
    id: ID
    api_id: String
    title: String
    author: String
    img_link: String
    site_link: String
    users: [User]
  }

  input ArtworkCreateInput {
    api_id: String!
    title: String!
    author: String!
    img_link: String!
    site_link: String!
  }

  input ArtworkUpdateInput {
    api_id: String
    title: String
    author: String
    img_link: String
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
