'use strict';

const Koa = require('koa');
const serverpush = require('koa-server-push');
const path = require('path');
const fs = require('fs');
const extname = path.extname;
const app = new Koa();
const staticCache = require('koa-static-cache')

app.use(serverpush());

// app.use(function *() {
//   const fpath = path.join(__dirname, './fixtures',this.path);
//   const fstat = fs.statSync(fpath);
//
//   if (fstat.isFile()) {
//     this.type = extname(fpath);
//     this.body = fs.createReadStream(fpath);
//   }
// });
app.use(staticCache(path.join(__dirname, './fixtures'), {
  maxAge: 365 * 24 * 60 * 60
}))
app.listen(4500);
