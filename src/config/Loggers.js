'use strict';
const chalk = require('chalk');

module.exports = (tokens, req, res) => {

  let status;
  if (res.statusCode != 200) status = chalk.redBright(`[ error ] > ${res.req?.route?.path} | ` + res.locals.message);
  else status = chalk.greenBright(`[success] > ${res.req?.route?.path} | ` + res.locals.message);

  return [
    status,
    tokens.date(req, res), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ');
};