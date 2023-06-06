export const typeDefs = `#graphql
type User{
  name: String
  phoneNumber: String
}
  type Query {
    currentNumber: Int
  }

  type Mutation {
    createUser(name: String, phoneNumber: String): [User]
  }

  type Subscription {
    userCreated: User
  }
`;
