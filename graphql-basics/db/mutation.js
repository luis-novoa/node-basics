const { PostType } = require('./types.js');
const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  type: 'Mutation',
  fields: {
    createPost: {
      type: PostType,
      args: {
        content: { type: GraphQLString }
      },
      resolve: postsController.create
    },
    updatePost: {
      type: PostType,
      args: {
        id: { type: GraphQLID },
        content: { type: GraphQLString }
      },
      resolve: postsController.update
    },
    destroyPost: {
      type: PostType,
      args: {
        id: { type: GraphQLID }
      },
      resolve: postsController.destroy
    }
  }
});

exports.mutation = RootMutation;