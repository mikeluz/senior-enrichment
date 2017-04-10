import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AppContainer extends Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (

			<div>
			<h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
			<ul>
				<li><Link to={"/api/students"}>Students</Link></li>
				<li><Link to={"/api/students/add"}>Add Student</Link></li>
				<li><Link to={"/api/campuses"}>Campuses</Link></li>
				<li><Link to={"/api/campuses/add"}>Add Campus</Link></li>
			</ul>
			</div>
		)
	}

}
