import { RECEIVE_CAMPUSES, SET_CAMPUS } from '../constants';

const initialState = {
	campuses: [],
	currentCampus: {}
};

export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch(action.type) {

  	case RECEIVE_CAMPUSES:
  		newState.campuses = action.campuses;
  		break;

  	case SET_CAMPUS:
  		newState.currentCampus = action.selectedCampus;
  		break;

    default: 
      	return state;
  }

  return newState;
}