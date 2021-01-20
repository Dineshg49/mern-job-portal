import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import UsersList from './components/Users/UsersList'
import Home from './components/Common/Home'
import Register from './components/Common/Register'
import Navbar from './components/templates/Navbar'
import Profile from './components/Users/Profile'
import Login from './components/Common/Login'
import Dashboardr from './components/Users/dashboard-r'
import Dashboardrjobform from './components/Users/create-job'
import Dashboarda from './components/Users/dashboard-a'
import CreatedJobs from './components/Users/created-jobs'
import jobdetails from './components/Users/job-details'
import Myjobs from './components/Users/my-jobs'
import Editprofilea from './components/Users/edit-profile-a'
import editprofiler from './components/Users/edit-profile-r'
import myapplications from './components/Users/my-applications'
import myemployees from './components/Users/my-employees'

function App() {
  return (
    <Router>
      <div className="container">
        <br/>
        <Route path="/" exact component={Home}/>
        <Route path="/users" exact component={UsersList}/>
        <Route path="/register" component={Register}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/login" component = {Login}/>
        <Route path ="/dashboard-r" component = {Dashboardr}/>
        <Route path = "/create-job" component = {Dashboardrjobform}/>
        <Route path ="/myjobs"component ={Myjobs}/>
        <Route path = "/dashboard-a"component = {Dashboarda}/>
        <Route path = "/created-jobs" component ={CreatedJobs}/>
        <Route path = "/job-details" component = {jobdetails}/>
        <Route path ="/edit-profile-a" component = {Editprofilea}/>
        <Route path ="/edit-profile-r" component={editprofiler}/>
        <Route path = "/my-applications" component ={myapplications}/>
        <Route path = "/myemployees" component = {myemployees}/>
      </div>
    </Router>
  );
}

export default App;
