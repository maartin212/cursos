export const typeDefs = `
  type Query {
    getUser(id: ID!): User
    getUsers: [User]!
  }

  type Mutation {
    createUser(
      nickname: String!,
      fullname: String!,
      phone: String,
      city: String, 
    ): User!
    deleteUser(id: ID!): User
  }

  type User {
    _id: ID!
    nickname: String!
    fullname: String!
    phone: String
    city: String
  }
`;
