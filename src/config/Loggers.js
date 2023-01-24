'use strict';
const chalk = require('chalk');

module.exports = (tokens, req, res) => {

  let status;
  let path = res.req?.route?.path ? res.req?.route?.path : req.originalUrl

  if (res.statusCode >= 400) status = chalk.redBright(`[ error ] > ${path} | ` + res.locals.message);
  else status = chalk.greenBright(`[success] > ${path} | ` + res.locals.message);

  let time = new Date(new Date().getTime());

  return [
    status,
    time, '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ');
};