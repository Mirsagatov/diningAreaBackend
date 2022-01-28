const { gql } = require('apollo-server-express')

module.exports = gql`
    type SubCategories {
        id: ID!
        name: String!
        image: String!
    }

    extend type Mutation {
        newSubcategory(name: String! image: String! categoryID: ID!): SubCategories
    }

    extend type Query {
        subcategories(categoryID: ID!): [ SubCategories ]
    }
`