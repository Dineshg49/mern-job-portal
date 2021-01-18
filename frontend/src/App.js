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

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={Home}/>
        <Route path="/users" exact component={UsersList}/>
        <Route path="/register" component={Register}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/login" component = {Login}/>
        <Route path ="/dashboard-r" component = {Dashboardr}/>
        <Route path = "/dashboard-r/create-job" component = {Dashboardrjobform}/>
        <Route path = "/dashboard-a"component = {Dashboarda}/>
      </div>
    </Router>
  );
}

export default App;
