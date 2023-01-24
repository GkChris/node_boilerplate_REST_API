'use strict';
const dotenv = require('dotenv')

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

if (env.hasOwnProperty('error')) throw new Error('No .env file!');

const AppConfigurations = require('./AppConfigurations');
const DatabaseConfigurations = require('./DatabaseConfiguration');
const MqttConfigurations = require('./MqttConfigurations');
const ValidationConfigurations = require('./ValidationConfigurations');
const StatusCodes = require('./StatusCodes.json');
const CacheConfigurations = require('./CacheConfigurations');

module.exports = {
    AppConfigurations,
    DatabaseConfigurations,
    MqttConfigurations,
    ValidationConfigurations,
    StatusCodes,
    CacheConfigurations
};


