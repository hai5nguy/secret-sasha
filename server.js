const express = require('express')
const graphqlHTTP = require('express-graphql')

const db = require('./db')

const app = express()

const PORT = process.env.PORT || 5000

const schema = require('./schema.js')
const root = require('./root-resolver.js')

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}))

app.use('/reset', (req, res) => {
    db.reset()
    res.send('Resetted')
})

app.use(express.static(`${__dirname}/build`))
app.use('*', express.static(`${__dirname}/build/index.html`))

db.init(() => {
    console.log('DB ready')
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`)
    });
})
