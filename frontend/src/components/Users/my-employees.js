import React, {Component} from 'react';
import axios from 'axios';
import Navbarr from '../templates/Navbar-r'
import { Button, unstable_createMuiStrictModeTheme } from '@material-ui/core';

class myemployees extends Component {
    
    constructor(props) {
        super(props);
        this.state = {details: [] , curr_job : [] ,stat : ''}
        this.checstatus = this.checstatus.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/user/myemployees') // unimplemented
             .then(response => {
                 this.setState({details: response.data});
             })
             .catch(function(error) {
                 console.log(error);
             })
    }
    checstatus(title)
    {
        var x = this.state.details[0].jobs_applied
        var i
        var f=0
        for(i = 0 ;i<x.length ;i++){
            if(x[i]==title)
                f=1;
        }
        return f;
    }

    render() {
        
        return (
            <div>
                <Button variant="contained" color="primary" href="/dashboard-r" class="back">Back</Button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Applicant Name</th>
                            <th>Applicant Skills</th>
                            <th>Date of Application</th>
                            <th>Education</th>
                            <th>SOP</th>
                            <th>Rating</th>
                            {/* <th>Dispatch</th> */}
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        this.state.details.map((user, i) => {
                            return (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{
                                        user.skills.map((val,i) => {
                                return (
                                <span>{val} <span>&nbsp;&nbsp;</span> </span>
                                )
                            })
                        }</td>
                                    <td>Date of Application</td>
                                    <td>{
                            user.education.map((val,i) => {

                                
                                if(val.inst!==''){
                                return (
                                <span>{val.inst}({val.joind} - {val.endd}) <span>&nbsp;&nbsp;</span></span>
                                )
                                }
                                else
                                {
                                    return (
                                        <span></span>
                                    )
                                }
                            })
                        }</td>
                            <td>SOP</td>
                            <td>Rating</td>
                        
{/*                     
                                    <div>
                                    <td>{val}</td>
                                    <td><button>{buttonval}</button></td>
                                    <td><button>Reject</button></td>
                                    </div> */}

                        
                        


                                  
                                    {/* <td><input type="button" value="Dispatch" className="btn btn-primary"/></td> */}
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default myemployees;