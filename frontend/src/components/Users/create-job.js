import React, {Component} from 'react';
import axios from 'axios';
import Navbarr from '../templates/Navbar-r'

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
            type : 'full-time',
            duration : 0,
            salary : 0 ,
            rating : 0,
            name_of_recuiter : '',
            email_of_recuiter : '',
            year : 2020,
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
        console.log(e.target.value)
        console.log(this.state.title)
        this.setState({ [nam] : val });
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.title)
        console.log("bich wala")
        console.log(this.state.details[0].name)
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

        this.state.deadline = this.state.year.toString() + '. ' + smonth + '. ' + sday +'. ' + shour + ':' + sminute;
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
            //date: Date.now()
        }

        axios.post('http://localhost:4000/jobs/create', newJob)
             .then(function(res){
           //     window.location = "/login_page"
            });
        axios.get('http://localhost:4000/users/job-created', {
            params : {
                title : this.state.title
            }
        })
            .then(function(res){
          //     window.location = "/login_page"
           });
    }

    render() {
        return (
        <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text" 
                               className="form-control" 
                               name = "title"
                               value={this.state.title}
                               onChange={this.onChange}
                               placeholder = "title"
                               />
                    </div>
                    <div className="form-group">
                        <label>Max Number of Applicants: </label>
                        <input type="number" 
                             name = "max_applications"
                               className="form-control" 
                               value={this.state.max_applications}
                               onChange={this.onChange}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Max Number of Positions: </label>
                        <input type="number" 
                             name = "max_positions"
                               className="form-control" 
                               value={this.state.max_positions}
                               onChange={this.onChange}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Deadline : (YYYY/MM/DD/hh/mm)</label>
                        <label>Year :</label>
                        <input type="number" 
                             name = "year"
                               className="form-control" 
                               value={this.state.year}
                               onChange={this.onChange}
                               />
                        <label>Month :</label>
                        <input type="number" 
                             name = "month"
                               className="form-control" 
                               value={this.state.month}
                               onChange={this.onChange}
                               />
                        <label>Day :</label>
                        <input type="number" 
                             name = "day"
                               className="form-control" 
                               value={this.state.day}
                               onChange={this.onChange}
                               />
                        <label>Hour :</label>
                        <input type="number" 
                             name = "hour"
                               className="form-control" 
                               value={this.state.hour}
                               onChange={this.onChange}
                               />
                        <label>Minute :</label>
                        <input type="number" 
                             name = "minute"
                               className="form-control" 
                               value={this.state.minute}
                               onChange={this.onChange}
                               />
                    </div>
                    <div className="form-group">
                        <label>Skills :</label>
                        <input type="text" 
                             name = "skills"
                               className="form-control" 
                               value={this.state.skills}
                               onChange={this.onChange}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Job Type: </label>
                        <select id="opt" 
                               className="form-control" 
                               value={this.state.type}
                               name = "type"
                               onChange={this.onChange}
                               >
                                       <option value="full-time">Full-Time</option>
                                       <option value="applicant">Part-Time</option>
                                       <option value="recuiter">Work From Home</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <label>Duration: </label>
                        <input type="number" 
                             name = "duration"
                               className="form-control" 
                               value={this.state.duration}
                               onChange={this.onChange}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Salary : </label>
                        <input type="number" 
                             name = "salary"
                               className="form-control" 
                               value={this.state.salary}
                               onChange={this.onChange}
                               />  
                    </div>
                    <div className="form-group applicant">
                        <label>Rating</label>
                        <input type="range" min="0" max="5" name = "rating" onChange = {this.onChange} value ={this.state.rating}></input>
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Create" className="btn btn-primary"/>
                    </div>
                </form>
        </div>
        )
    }
}

export default Dashboardrjobform;