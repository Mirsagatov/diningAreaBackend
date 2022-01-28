const { gql } = require('apollo-server-express')

module.exports = gql`
    type Orders {
        id: ID!
        address: String!
    }

    type OrderDetails {
        id: ID!
        name: String!
        count: Int!
        price: String!
        address: String!
        userName: String!
        image: String!
    }
    
    extend type Mutation {
        newOrder(address: String!): Orders
    }

    extend type Query {
        orders(orderID: ID!): [ OrderDetails! ]
    }
`