import React from 'react';
import { Link } from 'react-router';

export default function AllCampuses (props) {

	const campuses = props.allCampuses;

	return (

		/* must wrap everything in a div!! 
		must return a single div */
		<div>
			<h1>All Campuses</h1>
			<div>
			<table id="center-table">
				<thead>
				<tr>
				<td>Name</td>
				<td>Motto</td>
				</tr>
				</thead>
				<tbody>
				{
					campuses && campuses.map(campus => (
						<tr key={campus.id}>
						<td><Link to={`/api/campuses/${campus.id}`}>{campus.name}</Link></td>
						<td>{campus.motto}</td>
						</tr>
					))
				}
				</tbody>
			</table>
			</div>
		</div>

	)

};


