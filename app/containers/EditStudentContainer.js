import React from 'react';
import EditStudent from '../components/EditStudent';
import { connect } from 'react-redux';
import { loadAllCampuses } from '../action-creators/campuses';

const mapStateToProps = function (state) {
	console.log('state', state);
	return {
		allCampuses: state.campuses.campuses,
		selectedStudent: state.students.currentStudent
	};
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);