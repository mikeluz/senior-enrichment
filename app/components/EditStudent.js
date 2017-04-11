import React from 'react';
import { Link } from 'react-router';

export default function (props) {

	const campuses = props.allCampuses;
	const currentStudent = props.selectedStudent;

	return (
		<div id="single">
		<h1>Edit Student</h1>
		<h3>(<Link to={`/api/students/${currentStudent.id}/delete`}>Delete</Link>)</h3>
		<form method="POST" action={`/api/students/${currentStudent.id}/edit`}>
		<div id="left-form">
			<label>Name</label>
			<br />	
			<input name="name" type="text" defaultValue={currentStudent.name}></input>
		</div>
		<br />
		<div id="left-form">
			<label>Email</label>
			<br />
			<input name="email" type="text" defaultValue={currentStudent.email}></input>
		</div>
		<br />
		<div id="left-form">
			<label>Campus</label>
			<br />
				<select name="campus" type="text">
					{
						campuses && campuses.map(campus => (
							<option 
							key={campus.id}
							selected={campus.id === currentStudent.campusId ? "selected" : null}
							>{campus.name}</option>
						))
					}
				</select>
		</div>
		<br />
		<div id="left-form" >
		<button type="submit">Update Student</button>
		</div>
		</form>
		</div>
	)
}