import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export default class NavBarr extends Component {
    


    render() {
        return (
            <div>                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/dashboard-r/create-job" className="nav-link">Create-Job</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/created-jobs" className="nav-link">My-Jobs</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/profile" className="nav-link">My Profile</Link>
                            </li> 
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Logout</Link>
                            </li>                      
                        </ul>
                </nav>
            </div>
        )
    }
}