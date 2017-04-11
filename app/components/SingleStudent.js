import React from 'react';

export default function SingleStudent (props) {

	var student = props.selectedStudent;

	return (

		/* must wrap everything in a div!! 
		must return a single div */
		<div id="single">
			<h1>Current Student</h1>
			<h2>Name: {student.name}</h2>
			<h3>Email: {student.email}</h3>
			<h1>Campus: {student.campusId}</h1>
		</div>

	)

};