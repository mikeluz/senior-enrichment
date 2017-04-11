import React from 'react';
import { Link } from 'react-router';

const Menu = () => (
	<ul>
		<li><Link to={"/api/students"}>Students</Link></li>
		<li><Link to={"/api/students/add"}>+</Link></li>
		<li> / </li>
		<Link to={"/jokes"}>Home</Link>
		<li> / </li>
		<li><Link to={"/api/campuses"}>Campuses</Link></li>
		<li><Link to={"/api/campuses/add"}>+</Link></li>
	</ul>
);

export default Menu;