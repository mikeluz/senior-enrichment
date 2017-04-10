'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

var schema = {};

schema.name = {
  	type: Sequelize.STRING,
  	allowNull: false
};

var options = {};

// options.instanceMethods
// options.classMethods
// etc...

const Campus = db.define('campus', schema, options);
module.exports = Campus;
