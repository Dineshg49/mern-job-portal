import React, {Component} from 'react';
import axios from 'axios';
import { Nav } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css" 

class Dashboardr extends Component {
    
    constructor(props) {
        super(props);
        this.state = {details: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/user/profile') // unimplemented
             .then(response => {
                 this.setState({details: response.data});
             })
             .catch(function(error) {
                 console.log(error);
             })
        
    }

    render() {
        return (
            <div>
                <Nav variant="pills" className="flex-column">
                <Nav.Link href="/create-job">Create Job</Nav.Link>
                <Nav.Link href="/profile">My Profile</Nav.Link>
                <Nav.Link href="/created-jobs">Job Listings</Nav.Link>
                <Nav.Link href = "/myemployees">My Employees</Nav.Link>
                <Nav.Link href="/">Logout</Nav.Link>
                </Nav>
             </div>
        )
    }
}

export default Dashboardr;