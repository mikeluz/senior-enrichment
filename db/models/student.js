'use strict';
var Sequelize = require('sequelize');
const db = require('../index.js');
const Campus = require('./campus');

// schema //
////////////
const schema = {};

schema.name = {
  	type: Sequelize.STRING,
  	allowNull: false
 };

schema.email = {
  	type: Sequelize.STRING,
  	allowNull: false
};

// options //
/////////////
const options = {};

// model definition, attach to db //
////////////////////////////////////
const Student = db.define('student', schema, options);


// export it //
///////////////
module.exports = Student;
