import { gql } from '@apollo/client';

const ADD_ARTWORK_TO_USER = gql`
  mutation AddArtworkToUser(
    $addArtworkToUserId: String
    $artwork: ArtworkInput
  ) {
    addArtworkToUser(id: $addArtworkToUserId, artwork: $artwork) {
      id
      name
      artworks {
        id
        api_id
        title
        author
        img_link
        site_link
      }
    }
  }
`;

const REMOVE_ARTWORK_FROM_USER = gql`
  mutation RemoveArtworkFromUser(
    $removeArtworkFromUserId: String
    $artworkId: String
  ) {
    removeArtworkFromUser(
      id: $removeArtworkFromUserId
      artwork_id: $artworkId
    ) {
      id
      name
      artworks {
        id
        api_id
        title
        author
        img_link
        site_link
      }
    }
  }
`;

export { ADD_ARTWORK_TO_USER, REMOVE_ARTWORK_FROM_USER };
