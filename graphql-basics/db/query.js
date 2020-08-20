const { PostType } = require('./types.js');
const { GraphQLObjectType, GraphQLID } = require('graphql');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  type: 'Query',
  fields: {
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve: postsController.show
    },
    posts: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve: postsController.index
    }
  }
});