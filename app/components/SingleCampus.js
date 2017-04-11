import React from 'react';
import { Link } from 'react-router';

export default function SingleCampus (props) {

	var campus = props.selectedCampus;
	var studentsOnCampus = props.students.filter(student => {
		return student.campusId === campus.id;
	});

	return (

		/* must wrap everything in a div!! 
		must return a single div */
		<div id="single">
			<h1>Current Campus</h1><h3>(<Link to={`/api/campuses/${campus.id}/edit`}>Edit</Link>)</h3>
			<h2>Name: {campus.name}</h2>
			<h3>Motto: {campus.motto}</h3>
			<table id="center-table">
				<thead>
				<tr>
				<td>
				Students
				</td>
				</tr>
				</thead>
				<tbody>
				{
					studentsOnCampus && studentsOnCampus.map(student => (
						<tr key={student.id}>
						<td><Link to={`/api/students/${student.id}`}>{student.name}</Link></td>
						</tr>
					))
				}
				</tbody>
			</table>
		</div>

	)

};