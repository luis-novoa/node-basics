const express = require('express');
const { GraphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const { query } = require('./db/query');
const { mutation } = require('./db/mutation');

const schema = new GraphQLSchema({
  query,
  mutation
});

const app = express();
app.use('/', GraphqlHTTP({
  schema: schema,
  graphiql: true
}))
// const queryRoot = new graphql.GraphQLObjectType({
//   name: 'Query',
//   fields: () => ({
//     hello: {
//       type: graphql.GraphQLString,
//       resolve: () => "Hello world!"
//     }
//   })
// });

// const schema = new graphql.GraphQLSchema({ query: queryRoot });
// const app = express();
// app.use('/api', graphqlHTTP({
//   schema: schema,
//   graphiql: true
// }));

app.listen(3000);