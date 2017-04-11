import React from 'react';
import { Link } from 'react-router';

const Menu = () => (
	<ul>
		<li><Link to={"/api/students"}>Students</Link></li>
		<li> / </li>
		<li><Link to={"/api/students/add"}>Add Student</Link></li>
		<li> / </li>
		<li><Link to={"/api/campuses"}>Campuses</Link></li>
		<li> / </li>
		<li><Link to={"/api/campuses/add"}>Add Campus</Link></li>
	</ul>
);

export default Menu;