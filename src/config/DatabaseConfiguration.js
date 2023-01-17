'use strict';
const dotenv = require('dotenv')
const mongoose = require('mongoose');

const db = process.env.DB || 'mongodb://localhost:27017/mvcboiler'

const TestSchema = require('../api/models/Test');



// Db connection and setup
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

module.exports.database = db;

module.exports.Test = mongoose.model('Test', TestSchema);