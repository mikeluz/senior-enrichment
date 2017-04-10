import React from 'react';

export default function (props) {

	const campuses = props.allCampuses.campuses;

	return (
		<div>
		<h1>Add Student</h1>
		<form method="POST" action="/api/students/">
			<label>Name:</label>
				<input name="name" type="text"></input>
			<label>Email:</label>
				<input name="email" type="text"></input>
			<label>Campus:</label>
				<select name="campus" type="text">
					{
						campuses && campuses.map(campus => (
							<option key={campus.id}>{campus.name}</option>
						))
					}
				</select>
		<button type="submit">Add Student</button>
		</form>
		</div>
	)
}