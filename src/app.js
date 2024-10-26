'use strict';
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
process.env.FORCE_COLOR = '1';
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

const resolvePath = require('path').resolve;

const chalk = require('chalk');
const figlet = require('figlet');

const config = require('./config');
const appConfig = config.AppConfig;
const middlewareConfig = config.MiddlewareConfig;
const databaseConfig = config.DatabaseConfig;
const Domains = config.DomainConfig;


// Express app initialization
var app = express();

// Middleware
if ( middlewareConfig.use_cors ) app.use(cors({ credentials: true, origin: Domains.MAIN_CLIENT.url}))
if ( middlewareConfig.use_helmet ) app.use(helmet());
if ( middlewareConfig.use_logger ) app.use(morgan(require('./api/middleware/Logger')));
if ( middlewareConfig.use_body_parser ) app.use(bodyParser.json())
if ( middlewareConfig.use_cookie_parser  ) app.use(cookieParser())
if ( middlewareConfig.use_cache ) app.use(require('./api/middleware/Cache'));
if ( middlewareConfig.use_content_validation ) app.use(require('./api/middleware/ValidateContent'));
if ( middlewareConfig.use_authentication ) app.use(require('./api/middleware/Authentication'));
if ( middlewareConfig.use_router ) app.use(require('./api/routes'));
if ( middlewareConfig.use_error_handler ) app.use(require('./api/middleware/ErrorHandler'));
if ( middlewareConfig.use_not_found_response ) app.use(require('./api/middleware/EndpointNotFound')); // Custom 404 middleware

app.listen(appConfig.port, appConfig.ip, () => {

  console.log(chalk.yellow(figlet.textSync(appConfig.backend_name, { font: 'Slant' })));
  console.log(chalk.yellow(figlet.textSync(`V.${appConfig.version}`, { font: 'Slant' })));
  
  console.log(chalk.cyanBright('  Server Info'));
  console.log(chalk.cyanBright('  -----------'));
  console.log(chalk.cyanBright('> IP address: ' + appConfig.ip));
  console.log(chalk.cyanBright('> Port: ' + appConfig.port));
  console.log(chalk.cyanBright('> Database: ' + databaseConfig.database));
  console.log(chalk.cyanBright('> Environment: ' + appConfig.environment));
  console.log('\n');
});