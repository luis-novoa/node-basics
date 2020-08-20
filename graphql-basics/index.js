const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const { query } = require('./db/query');
const { mutation } = require('./db/mutation');

const schema = new GraphQLSchema({
  query,
  mutation
});

const app = express();
app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(3000);