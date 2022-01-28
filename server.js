const express = require('express')
const app = express()
const { ApolloServer } = require('apollo-server-express')
const { PORT } = require('./src/config')
const modules = require('./src/modules')

const server = new ApolloServer({
    modules,
    context: ({ req }) => {
        return req.headers
    }
})

server.applyMiddleware({ app })

app.listen({ port: PORT }, () => {
    console.log('7000' + server.graphqlPath)
})