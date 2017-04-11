'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into Sequelize so any other part of the application could call Sequelize.model('user') OR Sequelize.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)

const Student = require('./student');
const Campus = require('./campus');

// Student.hook('beforeUpdate', function (student) {
// 	Student.findById({
// 		where: {
// 			id: student.id
// 		})
// 	.then(function (student) {
// 		if (student.campusId)
// 	})
//     if (student.campusId !== student.campusId) {
//         page.urlTitle = page.title.replace(/\s/g, '_').replace(/\W/g, '');
//     } else {
//         page.urlTitle = Math.random().toString(36).substring(2, 7);
//     }
// });

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = { Student, Campus };
