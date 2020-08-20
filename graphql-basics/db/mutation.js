const { CreatePostInput } = require('./types.js');
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = require('graphql');
const postsController = require('../controllers/posts_controller');

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  type: 'Mutation',
  fields: {
    createPost: {
      type: GraphQLString,
      args: {
        content: { type: GraphQLString }
      },
      resolve: postsController.create
    },
    updatePost: {
      type: GraphQLString,
      args: {
        input: { type: new GraphQLNonNull(CreatePostInput) }
      },
      resolve: postsController.update
    },
    destroyPost: {
      type: GraphQLString,
      args: {
        id: { type: GraphQLID }
      },
      resolve: postsController.destroy
    }
  }
});

exports.mutation = RootMutation;