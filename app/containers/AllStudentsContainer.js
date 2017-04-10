import React from 'react';
import AllStudents from '../components/AllStudents';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
	console.log('state', state);
	return {
		allStudents: state.students.students
	};
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);