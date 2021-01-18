import React, {Component} from 'react';
import axios from 'axios';
import Navbarr from '../templates/Navbar-r'

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
                <Navbarr></Navbarr> <br></br>  
             </div>
        )
    }
}

export default Dashboardr;