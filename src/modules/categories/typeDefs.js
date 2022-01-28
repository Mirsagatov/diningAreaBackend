const { gql } = require('apollo-server-express');

module.exports = gql`
    type Categories {
        id: ID!
        name: String!
        image: String!
    }

    extend type Mutation {
        newCategory(name: String! image: String!): Categories!
    }

    extend type Query {
        categories: [ Categories! ]!
    }
`