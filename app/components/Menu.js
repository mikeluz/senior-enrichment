import React from 'react';
import { Link } from 'react-router';

const Menu = () => (
	<ul>
		<li><Link to={"/api/students"}>Students</Link></li>
		<li>  +</li>
		<li><Link to={"/api/students/add"}>Add</Link></li>
		<li> / </li>
		<li><Link to={"/api/campuses"}>Campuses</Link></li>
		<li>  +</li>
		<li><Link to={"/api/campuses/add"}>Add</Link></li>
	</ul>
);

export default Menu;