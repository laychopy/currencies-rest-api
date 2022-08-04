const express = require('express');
const cors = require('cors');
const basicAuth = require('express-basic-auth');
const unless = require('./utils/unless');
const routes = require('./routes/v1');
const docsRoute = require('./routes/v1/docs.route');


const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('*', cors());

// authentication, we could have used jwt but we have a short period of time
app.use(unless('docs', basicAuth({
  users: { 'admin': 'edgeedge' }
})));

// v1 api routes
app.use('/v1', routes);
app.use('/docs',docsRoute);

// send back a 404 error for any unknown api request
app.use((_req, res, next) => {
  console.dir(_req);
  next(res.status(404).send("Not found."));
});


module.exports = app;