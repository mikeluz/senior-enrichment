import React from 'react';
import { Link } from 'react-router';

export default function SingleCampus (props) {

	var campus = props.selectedCampus;
	return (

		/* must wrap everything in a div!! 
		must return a single div */
		<div id="single">
			<h1>Current Campus</h1><h3>(<Link to={`/api/campuses/add`}>Edit</Link>)</h3>
			<h2>Name: {campus.name}</h2>
			<h3>Motto: {campus.motto}</h3>
		</div>

	)

};