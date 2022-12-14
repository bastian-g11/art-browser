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
    getAccount(email: String): Account
    getAccounts: [Account]
    login(email: String, password: String): User
  }

  type Mutation {
    createAccount(data: AccountCreateInput): Account
    updateAccount(id: String, data: AccountUpdateInput): Account
    deleteAccount(id: String): Account
  }
`;

export { AccountTypes };
