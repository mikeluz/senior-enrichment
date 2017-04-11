import React from 'react';

export default function SingleStudent (props) {

	var student = props.selectedStudent;

	return (

		/* must wrap everything in a div!! 
		must return a single div */
		<div>
			<h1>Current Student</h1>
			<h2>{student.name}</h2>
			<h3>{student.email}</h3>
			<h1>{student.campusId}</h1>
		</div>

	)

};