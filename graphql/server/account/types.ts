import { gql } from 'apollo-server-micro';

const AccountTypes = gql`
  type Account {
    id: ID
    email: String
    password: String
    user: User
  }

  input AccountCreateInput {
    email: String!
    password: String!
    user_id: String!
  }

  input AccountUpdateInput {
    email: String
    password: String
    user_id: String
  }

  type Query {
    getAccount(id: String): Account
    getAccounts: [Account]
  }

  type Mutation {
    createAccount(data: AccountCreateInput): Account
    updateAccount(id: String, data: AccountUpdateInput): Account
    deleteAccount(id: String): Account
  }
`;

export { AccountTypes };
