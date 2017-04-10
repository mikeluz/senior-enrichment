import { RECEIVE_STUDENTS, SET_STUDENT } from '../constants';

const initialState = {
	students: [],
	currentStudent: {}
};

export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch(action.type) {

  	case RECEIVE_STUDENTS:
  		newState.students = action.students;
  		break;

  	case SET_STUDENT:
  		newState.currentStudent = action.selectedStudent;
  		break;

    default: 
      	return state;
  }

  return newState;
}