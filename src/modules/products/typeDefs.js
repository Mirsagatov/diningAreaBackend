const { gql } = require('apollo-server-express')

module.exports = gql`
    input productsDetail {
        categoryID: ID!
        subcategoryID: ID!
        name: String!
        price: String!
        description: String!
        image: String!
    }

    type Products {
        id: ID!
        name: String!
        price: String!
        description: String
        image: String!
    }

    extend type Mutation {
        newProduct(detail: productsDetail): Products
    }

    extend type Query {
        products(categoryID: ID subcategoryID: ID): [ Products! ]
    }
`