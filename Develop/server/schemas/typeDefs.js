const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]!
    bookCount: Int
  }

  type Book {
    bookId: ID!
    description: String
    authors: [String]
    image: String
    link: String
    title: String!
  }

  type InputBook {
    bookId: String
    description: String
    authors: [String]
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: InputBook!): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
