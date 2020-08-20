const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const PostType = new GraphQLObjectType({
  name: 'Post',
  type: 'Query',
  fields: {
    id: { type: GraphQLInt },
    content: { type: GraphQLString }
  }
});

exports.PostType = PostType;