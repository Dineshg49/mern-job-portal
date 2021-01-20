import React, {Component} from 'react';
import axios from 'axios';
import Navbarr from '../templates/Navbar-r'
import { Button } from '@material-ui/core';

class myapplications extends Component {
    
    constructor(props) {
        super(props);
        this.state = { details : [] ,jobs : [] ,stat : ''}
        this.checstatus = this.checstatus.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/user/get-info') // unimplemented
             .then(response => {
                 this.setState({details: response.data});
             })
             .catch(function(error) {
                 console.log(error);
             })
        axios.get('http://localhost:4000/user/get-myjobs') // unimplemented
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
                <Button variant="contained" color="primary" href="/dashboard-a" class="back">Back</Button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Job-Title</th>
                            <th>Recuiter Name</th>
                            <th>Salary</th>
                            <th>Status of Application</th>
                            <th>Rate the Recuiter</th>

                            {/* <th>Dispatch</th> */}
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        this.state.jobs.map((job, i) => {
                            var status;
                            console.log("noob")
                            console.log(this.state.details[0].job_selected)
                            console.log(job._id)
                            if(this.state.details[0].job_selected === job._id)
                            {
                                status = "Accepted"
                            }
                            else 
                            {
                                var f=0;
                                var x = this.state.details[0]._id;
                                for(var i = 0; this.state.jobs[0].curr_rejected.length ;i++)
                                {
                                    if(x===this.state.jobs[0].curr_rejected[i])
                                    {
                                        f=1;
                                        status = "Rejected"
                                        break;
                                    }
                                }
                                if(f==0)
                                {
                                    console.log("hurray")
                                    console.log(x)
                                    console.log(job.curr_shortlisted[0])
                                    console.log("hurray")
                                    for(var i = 0; job.curr_shortlisted.length ;i++)
                                    {
                                        console.log(x)
                                        console.log(job.curr_shortlisted[i])
                                        if(x===job.curr_shortlisted[i])
                                        {
                                            f=1;
                                            status = "ShortListed"
                                            break;
                                        }
                                     }
                                }
                                if(f==0)
                                {
                                    status = "Applied"
                                }
                            }
                            return (
                                <tr>
                                    <td>{job.title}</td>
                                    <td>{job.name_of_recuiter}</td>
                                    <td>{job.salary}</td>
                                    <td>{status}</td>
                                    <td>Rating Slider</td>
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

export default myapplications;