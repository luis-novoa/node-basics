const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const graphql = require('graphql');

const queryRoot = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    hello: {
      type: graphql.GraphQLString,
      resolve: () => "Hello world!"
    }
  })
});

const schema = new graphql.GraphQLSchema({ query: queryRoot });
const app = express();
app.use('/api', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(3000);