import { gql } from '@apollo/client';

const ADD_ARTWORK_TO_USER = gql`
  query dArtworkToUser {
    mockModelGetter {
      id
      name
      description
    }
  }
`;

export { GET_MOCK_MODEL };
