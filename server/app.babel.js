const Koa = require('koa');
const app = new Koa();

import 'babel-polyfill';
import request from 'request';
import serve from 'koa-static';
import bunyan from 'koa-bunyan';
import logger from './logger';

// logger
// app.use(async (ctx, next) => {
//   const start = new Date;
//   await next();
//   const ms = new Date - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });

app.use(bunyan(logger, {
  level: "info",
  timeLimit: 250
}));

app.use(serve('public/'));

app.listen(3000);
