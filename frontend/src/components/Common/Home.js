import React, {Component} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css" 
import './Home.css'
var string = "MyString"


export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:''
        }
    }

    componentDidMount() {
        this.setState({
            name: 'Vikrant'
        })
    }

    componentDidUpdate() {
        if(this.state.name != 'Kanish')
        this.setState({
            name: 'Kanish'
        })
    }

    // render -> constructor -> (1st called) ComponentDidMount -> ComponentDidUpdate -> ComponentWillUnmount

    render() {
        return (
            <div>
                <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Button variant="contained" color="primary" href="/register">Register</Button>
                            </li>
                            <br></br>
                            <li className="navbar-item">
                                <Button variant="contained" color="secondary" href="/login">Login</Button>
                            </li>                      
                </ul>
                
           </div>
        )
    }
}