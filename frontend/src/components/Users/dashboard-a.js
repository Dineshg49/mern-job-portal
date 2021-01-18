import React, {Component} from 'react';
import axios from 'axios';
import Navbarr from '../templates/Navbar-r'
import { Button } from '@material-ui/core';

class Dashboarda extends Component {
    
    constructor(props) {
        super(props);
        this.state = {details: [] , jobs : [] ,stat : ''}
        this.checstatus = this.checstatus.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/user/profile') // unimplemented
             .then(response => {
                 this.setState({details: response.data});
             })
             .catch(function(error) {
                 console.log(error);
             })

        axios.get('http://localhost:4000/jobs/') // unimplemented
            .then(response => {
                this.setState({jobs: response.data});
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
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Job-Title</th>
                            <th>Recuiter Name</th>
                            <th>Recuiter Rating</th>
                            <th>Salary</th>
                            <th>Duration</th>
                            <th>Deadline</th>
                            <th>Apply</th>

                            {/* <th>Dispatch</th> */}
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        this.state.jobs.map((job, i) => {
                            var f = this.checstatus(job.title)
                           // var stat
                            if(f==1)
                                this.state.stat = "Applied"
                            else
                            {
                                console.log(job.max_applications)
                                console.log(job.curr_applicants.length)
                                if(job.max_applications == job.curr_applicants.length)
                                    this.state.stat = "Full"
                                else
                                    this.state.stat = "Apply"
                            }
                            return (
                                <tr>
                                    <td>{job.title}</td>
                                    <td>{job.name_of_recuiter}</td>
                                    <td>{job.rating}</td>
                                    <td>{job.salary}</td>
                                    <td>{job.duration}</td>
                                    <td>{job.deadline}</td>
                                    <th><button className="btn btn-primary" onClick = {() =>{
                                        axios.get('http://localhost:4000/user/apply-job' , this.state.details[0]
                                        )
                                        .then(response => console.log(response))
                                        .catch(function(err) {
                                            console.log(err);
                                        });
                                        axios.get('http://localhost:4000/jobs/add-applicant' , {
                                            params : {
                                                email : this.state.details[0].email,
                                                title : job.title
                                            }
                                        }
                                        )
                                        .then(response => console.log(response))
                                        .catch(function(err) {
                                            console.log(err);
                                        });

                                        // console.log(id)
                                    }}>{this.state.stat}</button></th>

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

export default Dashboarda;