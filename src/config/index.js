'use strict';
const dotenv = require('dotenv')

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

if (env.hasOwnProperty('error')) throw new Error('No .env file!');

const AppConfig = require('./AppConfig');
const DatabaseConfig = require('./DatabaseConfig');
const CacheConfig = require('./CacheConfig');
const MqttConfig = require('./MqttConfig');
const KeyConfig = require('./KeyConfig');
const DomainConfig = require('./DomainConfig');
const ValidationConfig = require('./ValidationConfig');
const ErrorHandlerConfig = require('./ErrorHandlerConfig')
const AuthConfig = require('./AuthConfig');
const MiddlewareConfig = require('./MiddlewareConfig');

module.exports = {
    AppConfig,
    DatabaseConfig,
    CacheConfig,
    MqttConfig,
    KeyConfig,
    DomainConfig,
    ValidationConfig,
    ErrorHandlerConfig,
    AuthConfig,
    MiddlewareConfig,
};


