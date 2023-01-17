'use strict';
const dotenv = require('dotenv')

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

if (env.hasOwnProperty('error')) throw new Error('No .env file!');

const appConfigurations = require('./AppConfigurations');
const databaseConfigurations = require('./DatabaseConfiguration');
const loggers = require('./Loggers');
const MqttConfigurations = require('./MqttConfigurations');
const ValidationConfigurations = require('./ValidationConfigurations');

module.exports = {
    appConfigurations,
    databaseConfigurations,
    loggers,
    MqttConfigurations,
    ValidationConfigurations
};


