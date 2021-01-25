import React, {Component} from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import {Form} from 'react-bootstrap'
import {Row , Col} from 'react-bootstrap'

class Dashboardrjobform extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            details: [],
            title : '',
            max_applications : 0,
            max_positions : 0,
            date : null ,
            deadline : '',
            skills : '' ,
            type : 'Full-time',
            duration : 0,
            salary : 0 ,
            rating : 0,
            name_of_recuiter : '',
            email_of_recuiter : '',
            year : 2021,
            month : 1,
            day : 24,
            hour : 23,
            minute : 55,

        }
        this.onSubmit = this.onSubmit.bind(this);
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
    onChange = e => {
        var nam = e.target.name;
        var val = e.target.value;
       // console.log(e.target.value)
       // console.log(this.state.title)
        this.setState({ [nam] : val });
    }
    onSubmit(e) {
        e.preventDefault();
      //  console.log(this.state.title)
      //  console.log("bich wala")
      //  console.log(this.state.details[0].name)
        var smonth = this.state.month.toString();
        if(this.state.month < 10)
            smonth = '0' + smonth;

        var sday = this.state.day.toString();
        if(this.state.day < 10)
            sday = '0' + sday;

        var shour = this.state.hour.toString();
        if(this.state.hour < 10)
            shour = '0' + shour;

        var sminute = this.state.minute.toString();
        if(this.state.minute < 10)
            sminute = '0' + sminute;

            var dead = this.state.year.toString() + '. ' + smonth + '. ' + sday +'. ' + shour + ':' + sminute;
            this.setState({deadline : dead })
        const newJob = {
            title: this.state.title,
            name_of_recuiter: this.state.details[0].name,
            email_of_recuiter : this.state.details[0].email,
            max_applications : this.state.max_applications,
            max_positions : this.state.max_positions,
            date_of_posting : Date.now(),
            deadline : this.state.deadline,
            skills : this.state.skills ,
            type: this.state.type ,
            duration : this.state.duration,
            salary : this.state.salary,
            rating : this.state.rating,
            status : 'active',
            curr_applicants : [],
            curr_selected : [],
            _id_of_recuiter : this.state.details[0]._id
            //date: Date.now()
        }

        axios.post('http://localhost:4000/user/create', newJob)
             .then(function(res){
           //     window.location = "/login_page"
            });
        axios.get('http://localhost:4000/user/job-created')
            .then(function(res){
              window.location = "/created-jobs"
           });
    }

    render() {
        return (
        <div>
                <Button variant="contained" color="primary" href="/dashboard-r" class="back">Back</Button>
                <Form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title of Job: </label>
                        <input type="text" 
                               className="form-control" 
                               name = "title"
                               value={this.state.title}
                               onChange={this.onChange}
                               required/>
                    </div>
                    <Row>
                        <Col>
                    <div className="form-group">
                        <label>Max Number of Applicants: </label>
                        <input type="number" 
                             name = "max_applications"
                             min = "1"
                               className="form-control" 
                               value={this.state.max_applications}
                               onChange={this.onChange}
                               required/>  
                    </div>
                    </Col>
                    <Col>
                    <div className="form-group">
                        <label>Max Number of Positions: </label>
                        <input type="number" 
                            min="1"
                             name = "max_positions"
                               className="form-control" 
                               value={this.state.max_positions}
                               onChange={this.onChange}
                               required/>  
                    </div>
                    </Col>
                    </Row>
                    <div className="form-group">
                        <label>Deadline :</label>
                        <br></br>
                        <Row>
                            <Col>
                        <label>Year :</label>
                        <input type="number" 
                             name = "year"
                             min="2021"
                             max ="2100"
                               className="form-control" 
                               value={this.state.year}
                               onChange={this.onChange}
                               required/>
                              </Col> <Col>
                        <label>Month :</label>
                        <input type="number" 
                             name = "month"
                             min="1"
                             max="12"
                               className="form-control" 
                               value={this.state.month}
                               onChange={this.onChange}
                               required/>
                               </Col><Col>
                        <label>Day :</label>
                        <input type="number" 
                             name = "day"
                             min="1"
                             max="31"
                               className="form-control" 
                               value={this.state.day}
                               onChange={this.onChange}
                               required/>
                               </Col><Col>
                        <label>Hour :</label>
                        <input type="number" 
                             name = "hour"
                             min="0"
                             max="59"
                               className="form-control" 
                               value={this.state.hour}
                               onChange={this.onChange}
                               required/>
                               </Col><Col>
                        <label>Minute :</label>
                        <input type="number" 
                             name = "minute"
                             min="0"
                             max="59"
                               className="form-control" 
                               value={this.state.minute}
                               onChange={this.onChange}
                               required/>
                               </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col>
                    <div className="form-group">
                        <label>Skills :</label>
                        <input type="text" 
                             name = "skills"
                               className="form-control" 
                               value={this.state.skills}
                               onChange={this.onChange}
                               />  
                    </div>
                    </Col>
                    <Col>
                    <div className="form-group">
                        <label>Job Type: </label>
                        <select id="opt" 
                               className="form-control" 
                               value={this.state.type}
                               name = "type"
                               onChange={this.onChange}
                               required>
                                       <option value="Full-time">Full-Time</option>
                                       <option value="Part-Time">Part-Time</option>
                                       <option value="Work From Home">Work From Home</option>

                        </select>
                    </div>
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                    <div className="form-group">
                        <label>Duration: </label>
                        <input type="number" 
                             name = "duration"
                             min="0"
                             max="6"
                               className="form-control" 
                               value={this.state.duration}
                               onChange={this.onChange}
                               required/>  
                    </div>
                    </Col>
                    <Col>
                    <div className="form-group">
                        <label>Salary : </label>
                        <input type="number" 
                             name = "salary"
                             min="0"
                               className="form-control" 
                               value={this.state.salary}
                               onChange={this.onChange}
                               required/>  
                    </div>
                    </Col>
                    </Row>
                    <div className="form-group">
                        <input type="submit" value="Create" className="btn btn-primary"/>
                    </div>
                </Form>
        </div>
        )
    }
}

export default Dashboardrjobform;