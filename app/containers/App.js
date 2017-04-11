import React, { Component } from 'react';
import { Link } from 'react-router';
import Menu from '../components/Menu';

export default function App({children}) {
	return (
		<div>
			<h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
			<Menu />
			<div className="col-xs-10">
				{ children }
			</div>
		</div>
	)
}