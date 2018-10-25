const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Query {
        gifters: [Gifter]
    }
    type Mutation {
        openGifter (name: String): String
    }
    type Gifter {
        name: String
        open: Boolean
    }
`);
