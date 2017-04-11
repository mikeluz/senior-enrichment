'use strict';
const Sequelize = require('sequelize');
const db = require('../index.js');

// schema //
////////////
const schema = {};

schema.name = {
  	type: Sequelize.STRING,
  	allowNull: false
};

schema.motto = {
	type: Sequelize.STRING,
	allowNull: false
};

// options //
/////////////
const options = {
	instanceMethods: {
		enrollment: function() {
			Student.count({
				where: {
					campusId: this.campusId
				}
			})
			.then(function(enrolled) {
				return enrolled;
			});
		}
	}
};
// options.instanceMethods
// options.classMethods
// etc...

// model definition, attach to db //
////////////////////////////////////
const Campus = db.define('campus', schema, options);

// export it //
///////////////
module.exports = Campus;
