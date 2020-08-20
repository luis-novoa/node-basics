const { PostType } = require('./types.js');
const { GraphQLObjectType, GraphQLID } = require('graphql');
const postsController = require('../controllers/posts_controller');

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

exports.query = RootQuery;