const connection = require('../db/connection');
const controller = {};

controller.index = async () => {
  return await connection('posts').select('*');
};

controller.create = async (parentValue, args) => {
  await connection('posts').insert({ content: args.content });

  return 'Post created!';
};

controller.show = async (parentValue, args) => {
  return await connection('posts').where('id', args.id).first();
};

controller.update = async (parentValue, args) => {
  await connection('posts').where('id', args.input.id).update({ content: args.input.content });

  return 'Post updated!';
};

controller.destroy = async (parentValue, args) => {
  await connection('posts').where('id', args.id).del();

  return 'Post deleted!';
};

module.exports = controller;