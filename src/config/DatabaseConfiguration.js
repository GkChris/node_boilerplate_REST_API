'use strict';
const mongoose = require('mongoose');

/* Database Schemas */
const TestSchema = require('../api/models/Test');

/* Configs */
const username = process.env.DB_USER_USERNAME;
const password = process.env.DB_USER_PASSWORD;
const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;

/* Database URI */
const db = process.env.NODE_ENV === 'development' 
    ?  `mongodb://${dbHost}:${dbPort}/${dbName}`
    : `mongodb://${username}:${password}@${dbHost}:${dbPort}/${dbName}`; 

// Db Connection 
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });

/* Setting Promise Implementation */
mongoose.Promise = Promise;

/* Export Database URI */ 
module.exports.database = db;

/* Export Models */
module.exports.Test = mongoose.model('Test', TestSchema);