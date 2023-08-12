'use strict';
const mongoose = require('mongoose');

const username = 'insert_username';
const password = 'insert_password';
const dbName = 'mvcboiler'; 
const dbHost = '127.0.0.1';
const dbPort = '27017';

const db = `mongodb://${username}:${password}@${dbHost}:${dbPort}/${dbName}`;

const TestSchema = require('../api/models/Test');

// Db connection and setup
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });
mongoose.Promise = Promise;

module.exports.database = db;

module.exports.Test = mongoose.model('Test', TestSchema);
