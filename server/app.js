const Koa = require('koa');
const app = new Koa();

const request = require('request');
const serve = require('koa-static');
const bunyan = require('koa-bunyan');
const logger = require('./logger');

app.use(bunyan(logger, {
  level: "info",
  timeLimit: 250
}));

const PORT = 3000;
app.use(serve('public/'));
console.log(`listening on port ${PORT}`)
app.listen(PORT);
