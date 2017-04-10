import React from 'react';
import { Link } from 'react-router';

export default function AllStudents (props) {

	var students = props.allStudents;

	return (

		/* must wrap everything in a div!! 
		must return a single div */
		<div>
			<h1>All Students</h1>
			<ul>
			{
				students && students.map(student => (
					<li key={student.id}><Link to={`/api/students/${student.id}`}>{student.name}</Link></li>
				))
			}
			</ul>
		</div>

	)

};