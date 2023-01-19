'use strict';
const dotenv = require('dotenv')

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

if (env.hasOwnProperty('error')) throw new Error('No .env file!');

const AppConfigurations = require('./AppConfigurations');
const DatabaseConfigurations = require('./DatabaseConfiguration');
const Loggers = require('./Loggers');
const MqttConfigurations = require('./MqttConfigurations');
const Validations = require('./Validations');
const StatusCodes = require('./StatusCodes.json');

module.exports = {
    AppConfigurations,
    DatabaseConfigurations,
    Loggers,
    MqttConfigurations,
    Validations,
    StatusCodes
};


