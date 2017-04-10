import React from 'react';

export default function SingleStudent (props) {

	var student = props.selectedStudent;

	return (

		/* must wrap everything in a div!! 
		must return a single div */
		<div>
			<h1>Current Student</h1>
			<ul>
			{
				<h1>{student.name}</h1>
			}
			</ul>
		</div>

	)

};