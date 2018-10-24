const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express()

const PORT = process.env.PORT || 5000


const schema = require('./schema.js')
const root = require('./root-resolver.js')

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}))

app.use(express.static(`${__dirname}/build`))
app.use('*', express.static(`${__dirname}/build/index.html`))

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});
