import React from 'react';

export default function (props) {

	const currentCampus = props.selectedCampus;
	console.log("currentCampus", currentCampus);

	return (
		<div id="single">
		<h1>Edit Campus</h1>
		<form method="POST" action={`/api/campuses/${currentCampus.id}/edit`}>
		<div id="left-form">
			<label>Name</label>
			<br />	
			<input name="name" type="text" defaultValue={currentCampus.name}></input>
		</div>
		<br />
		<div id="left-form">
			<label>Motto</label>
			<br />
			<input name="motto" type="text" defaultValue={currentCampus.motto}></input>
		</div>
		<br />
		<br />
		<div id="left-form" >
		<button type="submit">Update Campus</button>
		</div>
		</form>
		</div>
	)
}