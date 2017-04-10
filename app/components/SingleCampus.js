import React from 'react';

export default function SingleCampus (props) {

	console.log('props', props);
	var campus = props.selectedCampus;
	console.log('currentCampus', campus);
	return (

		/* must wrap everything in a div!! 
		must return a single div */
		<div>
			<h1>Current Campus</h1>
			<ul>
			{
				<h1>{campus.name}</h1>
			}
			</ul>
		</div>

	)

};