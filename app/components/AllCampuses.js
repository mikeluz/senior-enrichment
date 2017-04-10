import React from 'react';
import { Link } from 'react-router';

export default function AllCampuses (props) {

	const campuses = props.allCampuses;

	return (

		/* must wrap everything in a div!! 
		must return a single div */
		<div>
			<h1>All Campuses</h1>
			<ul>
			{
				campuses && campuses.map(campus => (
					<li key={campus.id}><Link to={`/api/campuses/${campus.id}`}>{campus.name}</Link></li>
				))
			}
			</ul>
		</div>

	)

};