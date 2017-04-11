import React from 'react';
import SingleStudent from '../components/SingleStudent';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
	return {
		selectedStudent: state.students.currentStudent,
		campusName: state.students.currentStudent.campusName
	};
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);