import React from 'react';

export default function () {
	return (
		<div>
		<h1>Add Campus</h1>
		<form method="POST" action="/api/campuses/">
			<label>Name:</label>
				<input name="name" type="text"></input>
		<button type="submit">Add Campus</button>
		</form>
		</div>
	)
}