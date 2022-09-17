import { gql } from 'apollo-server-micro';

const model1Types = gql`
  type Model1 {
    id: ID!
    name: String!
    description: String!
  }

  type Query {
    mockModelGetter: [Model1]
  }
  type Mutation {
    mockModelSetter(name: String!, description: String!): Model1
  }
`;

export { model1Types };
