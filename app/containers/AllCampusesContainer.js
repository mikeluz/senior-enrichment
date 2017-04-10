import React from 'react';
import AllCampuses from '../components/AllCampuses';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
	return {
		allCampuses: state.campuses.campuses
	};
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);