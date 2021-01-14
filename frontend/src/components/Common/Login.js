import React, {Component} from 'react';
import axios from 'axios';

export default class Login extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password : ''
        }

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangepass = this.onChangepass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    onChangepass(event) {
        this.setState({ password: event.target.value });
    }


    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            email: this.state.email,
            password : this.state.password
        }
        axios.post('http://localhost:4000/user/login', newUser)
             .then(res => {alert("Created\t" + res.data.email);console.log(res.data)})
             ;

        this.setState({
            email: '',
            password : ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>

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
                    {/* <div className = "form-group">
                    <label for="Job-Type">Job-Type:</label>
                        <select id="Job-Type">
                        <option value="Job-Applicant">Job Applicant</option>
                        <option value="Recruiter">Recruiter</option>
                        </select>
                    </div> */}
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}