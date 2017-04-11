import React from 'react';

export default function SingleCampus (props) {

	var campus = props.selectedCampus;
	return (

		/* must wrap everything in a div!! 
		must return a single div */
		<div>
			<h1>Current Campus</h1>
			<h2>{campus.name}</h2>
			<h3>{campus.motto}</h3>
		</div>

	)

};