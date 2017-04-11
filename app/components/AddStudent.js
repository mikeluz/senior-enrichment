import React from 'react';

export default function (props) {

	const campuses = props.allCampuses.campuses;

	return (
		<div id="single">
		<h1>Add Student</h1>
		<form method="POST" action="/api/students/">
		<div id="left-form">
			<label>Name</label>
			<br />	
			<input name="name" type="text"></input>
		</div>
		<br />
		<div id="left-form">
			<label>Email</label>
			<br />
			<input name="email" type="text"></input>
		</div>
		<br />
		<div id="left-form">
			<label>Campus</label>
			<br />
				<select name="campus" type="text">
					{
						campuses && campuses.map(campus => (
							<option key={campus.id}>{campus.name}</option>
						))
					}
				</select>
		</div>
		<br />
		<div id="left-form" >
		<button type="submit">Add Student</button>
		</div>
		</form>
		</div>
	)
}