const express = require('express');
const routes = express.Router();
const postsController = require('../controllers/posts_controller');

routes.get('/posts', postsController.index);
routes.post('/posts', postsController.create);
routes.get('/posts/:id', postsController.show);
routes.put('/posts/:id', postsController.update);
routes.delete('/posts/:id', postsController.destroy);

module.exports = routes;