'use strict'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import { Router, Route, Link, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import { HashRouter, BrowserRouter } from 'react-router-dom';

import { loadAllCampuses, setCurrentCampus } from './action-creators/campuses';
import { loadAllStudents, setCurrentStudent } from './action-creators/students';

import store from './store';
import Root from './components/Root';
import App from './containers/App';
import AddStudentContainer from './containers/AddStudentContainer';
import AllStudentsContainer from './containers/AllStudentsContainer';
import SingleStudentContainer from './containers/SingleStudentContainer';
import AddCampus from './components/AddCampus';
import AllCampusesContainer from './containers/AllCampusesContainer';
import SingleCampusContainer from './containers/SingleCampusContainer';
import EditStudentContainer from './containers/EditStudentContainer';
import EditCampusContainer from './containers/EditCampusContainer';
import Deleted from './components/Deleted';

const loadAll = () => {
  loadAllCampuses();
  loadAllStudents();
};

const deleteStudent = (nextRouterState) => {
  axios.delete(`/api/students/${nextRouterState.params.id}/delete`)
  .then(function (res) {
      if (res.data > 0) {
        console.log("Successfully deleted");
      } else {
        console.log("No record to delete");
      }
  });
};

const deleteCampus = (nextRouterState) => {
  axios.delete(`/api/campuses/${nextRouterState.params.id}/delete`)
    .then(function (res) {
      if (res.data > 0) {
        console.log("Successfully deleted");
      } else {
        console.log("No record to delete");
      }
  });
};

render (
  <Provider store={store}>
    <Router history={hashHistory}>
    	<Route path="/" component={App} onEnter={() => loadAll()}>
    		<Route path="/api/students" component={AllStudentsContainer} />
    		<Route path="/api/students/add" component={AddStudentContainer}/>
        <Route path="/api/students/:id" component={SingleStudentContainer} onEnter={(nextRouterState) => setCurrentStudent(nextRouterState)}>
            <Route path="delete" onEnter={(nextRouterState) => deleteStudent(nextRouterState)}>
              <IndexRedirect to="/success" />
            </Route>
        </Route>
        <Route path="/api/students/:id/edit" component={EditStudentContainer}/>
        <Route path="/api/campuses" component={AllCampusesContainer} />
        <Route path="/api/campuses/add" component={AddCampus}/>
        <Route path="/api/campuses/:id" component={SingleCampusContainer} onEnter={(nextRouterState) => setCurrentCampus(nextRouterState)}>
            <Route path="delete" onEnter={(nextRouterState) => deleteCampus(nextRouterState)}>
              <IndexRedirect to="/success" />
            </Route>
        </Route>
        <Route path="/api/campuses/:id/edit" component={EditCampusContainer}/>
        <Route path="/success" component={Deleted} onEnter={() => loadAll()}/>
        <Route path="/jokes" component={Root}/>
    		<IndexRoute component={Root}/>
    	</Route>
	  </Router>
  </Provider>,
  document.getElementById('main')
)

