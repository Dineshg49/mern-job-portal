import React, {Component} from 'react';
import axios from 'axios';
import './Register.css';

export default class Login extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password : '',
       //     name : ''
        }

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangepass = this.onChangepass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);
        this.showfirst = this.showfirst.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
    }
    onChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    onChangepass(event) {
        this.setState({ password: event.target.value });
    }
    onChangeName(event) {
        this.setState({ name : event.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            email: this.state.email, 
            password : this.state.password,
            name : this.state.name
        }
        axios.post('http://localhost:4000/user/register', newUser)
             .then(res => {alert("Created\t" + res.data.email);console.log(res.data)})
             ;

        this.setState({
            email: '',
            password : '',
            name :''
        });
    }

    onSubmit2(e) {
        e.preventDefault();

        const newUser2 = {
            email: this.state.email,
            password : this.state.password,
            name : this.state.name
        }
        axios.post('http://localhost:4000/user/register2', newUser2)
             .then(res => {alert("Created\t" + res.data.email);console.log(res.data)})
             ;

        this.setState({
            email: '',
            password : '',
            name :''
        });
    }
    showfirst(event) {
        // const tag = this.getElementById("Job-Type")
        const name = document.getElementById("Job-Type").value; 
       // const name = this.op.value;
       // document.getElementsByClassName()
        // const applicants = this.op1;
        // const recuiters  = this.op2;
        if(name == 1 )
        {
            document.getElementsByClassName("for-applicants")[0].style.display = "block";
            document.getElementsByClassName("for-recuiters")[0].style.display = "none";
            // applicants.style.display="block";
            // recuiters.style.display="none";
        }
       else
        {
            document.getElementsByClassName("for-applicants")[0].style.display = "none";
            document.getElementsByClassName("for-recuiters")[0].style.display = "block";
            // applicants.style.display="none";
            // recuiters.style.display="block";
        }
        
    }
    render() {
        return (
            
            <div>
                <div className = "form-group"> 
                    <label for="Job-Type">Register As:</label>
                        <select id="Job-Type" onChange = {this.showfirst} >
                        <option selected="selected" value="1">Job Applicant</option>
                        <option value="2">Recruiter</option>
                        </select>
                </div>
                <div className = "for-applicants" >
                <form onSubmit={this.onSubmit}  >
                    <div className = "form-group">
                        <label>Name:</label>
                        <input type = "text" className = "form-control" value = {this.state.name} onChange = {this.onChangeName}/>
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type = "text" className ="form-control" value = {this.state.password}
                        onChange = {this.onChangepass}
                        />
                    </div>
                    <div className = "form-group">
                    <h2>Education</h2>
                    <label>Institution Name</label>
                    <input type = "text" className = "form-control"/>
                    <label>Start Year</label>
                    <input type="number" min="1900" max="2099" step="1" value="2016"  className ="form-control"/>
                    <label>End Year</label>
                    <input type="number" min="1900" max="2099" step="1" value="2016"  className ="form-control"/>
                    </div>
                    <div className = "form-group">
                        <label>Rating</label>
                        <input type="range" min="0" max="5" value="0"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary"/>
                    </div>
                </form>
                </div>

                {/* For Recruiters */}
                <div className = "for-recuiters" >
                <form onSubmit={this.onSubmit2} >
                <div className = "form-group">
                        <label>Name:</label>
                        <input type = "text" className = "form-control" value = {this.state.name} onChange = {this.onChangeName}/>
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type = "text" className ="form-control" value = {this.state.password}
                        onChange = {this.onChangepass}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary"/>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}