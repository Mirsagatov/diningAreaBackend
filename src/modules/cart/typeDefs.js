const { gql } = require('apollo-server-express')

module.exports = gql`
    type Cart {
        id: ID!
        name: String!
        price: String!
        count: Int!
    }

    extend type Mutation {
        addToCart(productID: ID! productCount: Int): String
    }

    extend type Query {
        cartProducts: [ Cart! ]
    }
`