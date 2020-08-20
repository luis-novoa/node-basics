const { PostType } = require('./types.js');
const { GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql');
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
      type: GraphQLList(PostType),
      resolve: postsController.index
    }
  }
});

exports.query = RootQuery;