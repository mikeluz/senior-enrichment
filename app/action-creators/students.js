import { RECEIVE_STUDENTS, SET_STUDENT } from '../constants';
import axios from 'axios';
import store from '../store';

// action creators //
/////////////////////
export const receiveStudents = students => ({
    type: RECEIVE_STUDENTS,
    students
});

export const setStudent = student => ({
  type: SET_STUDENT,
  selectedStudent: student
});

// dispatch methods //
//////////////////////
export const loadAllStudents = () => {
  axios.get('/api/students')
    .then(res => {
      store.dispatch(receiveStudents(res.data));
  });
};

export const setCurrentStudent = (nextRouterState) => {
  console.log("state", nextRouterState);
  axios.get(`/api/students/${nextRouterState.params.id}`)
  .then(res => {
    store.dispatch(setStudent(res.data));
  });
};