import { gql } from '@apollo/client';

const GET_MOCK_MODEL = gql`
  query MockModelGetter {
    mockModelGetter {
      id
      name
      description
    }
  }
`;

export { GET_MOCK_MODEL };
