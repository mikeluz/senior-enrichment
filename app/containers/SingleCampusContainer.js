import React from 'react';
import SingleCampus from '../components/SingleCampus';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
	return {
		selectedCampus: state.campuses.currentCampus,
		students: state.students.students
	};
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);