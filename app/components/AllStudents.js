import React from 'react';
import { Link } from 'react-router';

export default function AllStudents (props) {

	var students = props.allStudents;

	return (
		/* must wrap everything in a div!! 
		must return a single div */
		<div>
			<h1>All Students</h1>
			<div>
			<table id="center-table">
				<thead>
				<tr>
				<td>Name</td>
				<td>Email</td>
				<td>Campus</td>
				</tr>
				</thead>
				<tbody>
				{
					students && students.map(student => (
						<tr key={student.id}>
						<td><Link to={`/api/students/${student.id}`}>{student.name}</Link></td>
						<td>{student.email}</td>
						<td><Link to={`/api/campuses/${student.campusId}`}>{student.campus.name}</Link></td>
						</tr>
					))
				}
				</tbody>
			</table>
			</div>
		</div>
	)

};