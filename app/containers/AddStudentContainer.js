import React from 'react';
import AddStudent from '../components/AddStudent';
import { connect } from 'react-redux';
import { loadAllCampuses } from '../action-creators/campuses';

const mapStateToProps = function (state) {
	return {
		allCampuses: state.campuses
	};
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);