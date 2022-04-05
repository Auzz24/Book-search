// import the gql tagged template function
const { gql } = require('apollo-server-express');

// STILL MISSING : image and link permas in Mutation.saveBook input type there as well, als oimage and link in booktype 
const typeDefs = gql`
type Query {
    me: User
  }
type Mutation {
  login(email: String!, username: String!):Auth
  addUser (email: String!, username: String!, password:String!): Auth
  saveBook(authors: Array!, description: String!, title: String!, bookId: String!): User, input
  removeBook:(bookId: String!): User
}
type User{
  id: ID
  username: String
  email: String 
  bookcount: Int
  savedBooks: [book]
}
type Book{
  bookdId:
  authors: Array
  description:String
  title: String
  image: 
  link:
}
type Auth{
  token:
  user: User
}
`;

// export the typeDefs
module.exports = typeDefs;