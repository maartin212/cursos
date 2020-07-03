export const typeDefs = `

  type Query {
    ping: String!
    getBooks: [Book!]!
    getAuthors: [Author!]!
    getReviews: [Review!]!
  }

  type Book {
    id: ID!
    title: String!
    author: Author!
    reviews: [Review!]!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  type Review {
    id: ID!
    text: String!
    book: Book!
  }

`;
