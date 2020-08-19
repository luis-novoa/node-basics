const { response } = require("express");

const connection = request('../db/connection');
const controller = {};

controller.index = async (req, res) => {
  const posts = await connection('posts').select('*');

  return res.json(posts);
};

controller.create = async (req, res) => {
  const { content } = req.body;
  await connection('posts').insert({ content });

  return response.json({ success: 'Post created' });
};

controller.show = async (req, res) => {
  const { id, content } = await connection('posts').where('id', req.params.id);

  return res.json({
    id: id,
    content: content
  });
};

controller.update = async (req, res) => {
  const { content } = req.body;
  await connection('posts').where('id', req.params.id).update({ content: content });
  return res.json({ success: 'Post updated' });
};

controller.destroy = async (req, res) => {
  await connection('posts').where('id', req.params.id).del();
  return res.json({ success: 'Post deleted' });
};

module.exports = controller;