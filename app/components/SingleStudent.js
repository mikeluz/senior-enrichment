import React from 'react';
import { Link } from 'react-router';

export default function SingleStudent (props) {

	var student = props.selectedStudent;

	console.log(student);

	return (

		/* must wrap everything in a div!! 
		must return a single div */
		<div id="single">
			<h1>Current Student</h1><h3>(<Link to={`/api/students/${student.id}/edit`}>Edit</Link>)</h3>
			<h2>Name: {student.name}</h2>
			<h3>Email: {student.email}</h3>
			<h1>Campus: {student.campusId}</h1>
		</div>

	)

};