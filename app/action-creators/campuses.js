import { RECEIVE_CAMPUSES, SET_CAMPUS } from '../constants';
import axios from 'axios';
import store from '../store';

// action creators //
/////////////////////
export const receiveCampuses = campuses => ({
    type: RECEIVE_CAMPUSES,
    campuses
});

export const setCampus = campus => ({
  type: SET_CAMPUS,
  selectedCampus: campus 
});

// dispatch methods //
//////////////////////
export const loadAllCampuses = () => {
  axios.get('/api/campuses')
    .then(res => {
      store.dispatch(receiveCampuses(res.data));
  });
};

export const setCurrentCampus = (nextRouterState) => {
  axios.get(`/api/campuses/${nextRouterState.params.id}`)
  .then(res => {
    store.dispatch(setCampus(res.data));
  });
};