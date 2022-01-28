const { gql } = require('apollo-server-express')

module.exports = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
    }

    extend type Mutation {
        register(name: String! email: String! password: String!): String
        login(name: String! password: String!): String
        adminLogin(name: String! password: String!): String
    }
`