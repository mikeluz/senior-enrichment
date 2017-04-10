import { combineReducers } from 'redux';
import studentReducer from './studentReducer';
import campusReducer from './campusReducer';

export default combineReducers({
	students: studentReducer,
	campuses: campusReducer
});
