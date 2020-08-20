const { GraphQLObjectType, GraphQLInputObjectType, GraphQLString, GraphQLInt } = require('graphql');

const PostType = new GraphQLObjectType({
  name: 'Post',
  type: 'Query',
  fields: {
    id: { type: GraphQLInt },
    content: { type: GraphQLString }
  }
});

const CreatePostInput = new GraphQLInputObjectType({
  name: 'CreatePostInput',
  fields: {
    id: { type: GraphQLInt },
    content: { type: GraphQLString }
  }
});

exports.PostType = PostType;
exports.CreatePostInput = CreatePostInput;