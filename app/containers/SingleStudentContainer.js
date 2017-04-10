import React from 'react';
import SingleStudent from '../components/SingleStudent';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
	return {
		selectedStudent: state.students.currentStudent
	};
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);