'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

var schema = {};

schema.name = {
  	type: Sequelize.STRING,
  	allowNull: false
 };

schema.email = {
  	type: Sequelize.STRING,
  	allowNull: false
};

var options = {};

// options.instanceMethods
// options.classMethods
// etc...

module.exports = db.define('student', schema, options);
