import React from 'react';
import EditCampus from '../components/EditCampus';
import { connect } from 'react-redux';
import { loadAllCampuses } from '../action-creators/campuses';

const mapStateToProps = function (state) {
	return {
		selectedCampus: state.campuses.currentCampus
	};
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);