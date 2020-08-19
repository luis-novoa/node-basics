const express = require('express');
const routes = require('./config/routes');
const app = express();

app.use(routes);

app.listen(3000);