import React from 'react';
import AllStudents from './AllStudents';
import { connect } from 'react-redux';

const mapStateToProps = function () {
	return {
		allStudents: state.allStudents
	};
};

const mapMethodsToProps = null;

export default connect(mapStateToProps, mapMethodsToProps)(AllStudents);