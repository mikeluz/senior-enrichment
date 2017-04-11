import React from 'react';

export default function () {
	return (
		<div id="single">
		<h1>Add Campus</h1>
		<form method="POST" action="/api/campuses/">
			<div>
			<label>Name</label>
			<br />
				<input name="name" type="text"></input>
			</div>
			<br />
			<div>
			<label>Motto</label>
			<br />
				<input name="motto" type="text"></input>
			</div>
			<br />
		<div>
		<button type="submit">Add Campus</button>
		</div>
		</form>
		</div>
	)
}