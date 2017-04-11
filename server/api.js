'use strict'
const api = require('express').Router();
const db = require('../db/models');
const Student = db.Student;
const Campus = db.Campus;

// student routes //
////////////////////
api.get('/students', (req, res) => {
	Student.findAll({})
	.then(function (allStudents) {
		res.send(allStudents);
	});
});

api.get('/students/:id', (req, res) => {
	Student.findById(req.params.id)
	.then(function (foundStudent) {
		res.send(foundStudent);
	});
});

api.post('/students', function(req, res, next) { // create new
    Campus.findOrCreate({
        where: {
            name: req.body.campus
        }
    })
    .spread(function(campus) {
        return Student.create(req.body)
            .then(function(newStudent) {
                return newStudent.setCampus(campus);
            });
    })
	.then(function(student) {
	    res.redirect('/');
	})
	.catch(next);
});

api.post('/students/:id/edit', (req, res, next) => {
    Campus.findOrCreate({
        where: {
            name: req.body.campus
        }
    })
    .spread(function(campus) {
        return Student.update(req.body, {
        	where: {
        		id: req.params.id
        	},
        	returning: true
        })
        .spread(function(numberOfUpdatedStudents, updatedStudent) {
            return updatedStudent[0].setCampus(campus);
        });
    })
	.then(function(student) {
	    res.redirect(`/#/api/students/${req.params.id}`);
	})
	.catch(next);
});

// campus routes //
///////////////////
api.get('/campuses', (req, res) => {
	Campus.findAll({
		include: [Student]
	})
	.then(function (allCampuses) {
		res.send(allCampuses);
	});
});

api.get('/campuses/:id', (req, res) => {
	Campus.findById(req.params.id)
	.then(function (foundCampus) {
		res.send(foundCampus);
	});
});

api.post('/campuses', (req, res, next) => {
	Campus.create(req.body)
	.then(function (newCampus) {
	    res.redirect('/');
	});
});

module.exports = api;

