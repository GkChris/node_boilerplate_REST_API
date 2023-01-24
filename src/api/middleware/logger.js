'use strict';
const chalk = require('chalk');

module.exports = (tokens, req, res) => {

  let status;
  if (res.statusCode >= 400) status = chalk.redBright(`[ error ] > ${res.req?.route?.path} | ` + res.locals.message);
  else status = chalk.greenBright(`[success] > ${res.req?.route?.path} | ` + res.locals.message);

  let time = new Date(new Date().getTime());

  return [
    status,
    time, '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ');
};