import { gql } from '@apollo/client';

const GET_USER_FAVORITE_ARTWORKS_IN = gql`
  query GetFavoriteArtworksIn(
    $getFavoriteArtworksInId: String
    $apiIds: [String]
  ) {
    getFavoriteArtworksIn(id: $getFavoriteArtworksInId, api_ids: $apiIds) {
      id
      api_id
      title
      author
      img_link
      site_link
    }
  }
`;

export { GET_USER_FAVORITE_ARTWORKS_IN };
