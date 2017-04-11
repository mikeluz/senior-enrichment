import React from 'react';
import DeleteStudent from '../components/DeleteStudent';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
	return {
		selectedStudent: state.students.currentStudent
	};
};

const mapDispatchToProps = {

	return {
		deleteStudent: function (nextRouterState) {
			axios.delete(`/api/students/${nextRouterState.params.id}/delete`);
		}
	}

};

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);