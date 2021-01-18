import React, {Component} from 'react';
import axios from 'axios';
import './Register.css'
import { Button } from '@material-ui/core';

export default class Register extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password : '',
            type: '',
            edcn : 1 ,
            education :[],
            ed00 : '',ed01 : '' , ed02 : '' ,
            ed10 : '',ed11 : '' , ed12 : '' ,
            ed20 : '',ed21 : '' , ed22 : '' ,
            rating : 0 ,
            skills : [],
            skilla1 : '',
            skilla2 : '',
            skilla3 : '',
            bio : '',
            contactno : ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.fun= this.fun.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    fun() {
        this.state.edcn = this.state.edcn +1;
        var n  = this.state.edcn;
        console.log(n);
        var st = 'ed-' + n.toString();
        console.log(st);
        document.getElementById(st).style.display = "block";
        if(n === 3)
            document.getElementById("addmore").style.display = "none";
    }
    onChangeUsername(event) {
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({ name: event.target.value });
    }

    onChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    onChangeType(event) {
        this.setState({ type: event.target.value });
        //console.log("here")
        var curr = event.target.value
        if(curr=== "applicant")
        {
            var x =  document.getElementsByClassName("applicant");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "block";
              }
             x = document.getElementsByClassName("recuiter");
             for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
              }
              x =  document.getElementsByClassName("common");
              for (i = 0; i < x.length; i++) {
                x[i].style.display = "block";
              }
        }
        else if(curr === "recuiter")
        {
            var x =  document.getElementsByClassName("applicant");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
              }
             x = document.getElementsByClassName("recuiter");
             for (i = 0; i < x.length; i++) {
                x[i].style.display = "block";
              }
              x =  document.getElementsByClassName("common");
              for (i = 0; i < x.length; i++) {
                x[i].style.display = "block";
              }
        }
        else
        {
            var x =  document.getElementsByClassName("applicant");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
              }
             x = document.getElementsByClassName("recuiter");
             for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
              }
              x =  document.getElementsByClassName("common");
              for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
              }
        }
    }
        onChange = e => {
            var nam = e.target.name;
            var val = e.target.value;
            this.setState({ [nam] : val });
        }
    
    onSubmit(e) {
        e.preventDefault();
        var c00 = this.state.ed00;
        var c01 = this.state.ed01;
        var c02 = this.state.ed02;
        var c10 = this.state.ed10;
        var c11 = this.state.ed11;
        var c12 = this.state.ed12;
        var c20 = this.state.ed20;
        var c21 = this.state.ed21;
        var c22 = this.state.ed22;
        if(this.state.skilla1 !== '')
            this.state.skills.concat(this.state.skilla1)
        if(this.state.skilla2 !== '')
            this.state.axiosskills.concat(this.state.skilla2)
        if(this.state.skilla3 !== '')
            this.state.skills.concat(this.state.skilla3)
        if(this.state.edcn === 1)
            this.state.education = [ [c00] ,[c01] ,[c02] ];
        else if(this.state.edcn === 2)
        {
            this.state.education =  [ { c00 ,c01 ,c02} , {c10 ,c11 ,c12} ]
        }
        else
        {
            this.state.edcucation  = [ { c00 ,c01 ,c02} , {c10 ,c11 ,c12} , {c20 ,c21 ,c22}  ]
        }
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            type: this.state.type ,
            password : this.state.password ,
            education : this.state.education,
            rating : this.state.rating,
            skills : this.state.skills
            //date: Date.now()
        }
        const newUser2 = {
            name: this.state.name,
            email: this.state.email,
            password : this.state.password,
            type: this.state.type ,
            contactno : this.state.contactno ,
            bio : this.state.bio
        }
        if(this.state.type === "applicant"){
        axios.post('http://localhost:4000/user/register', newUser)
             .then(function(res){
                window.location = "/login"
            });
        }
        else{
            axios.post('http://localhost:4000/user/register2', newUser2)
             .then(function(res){
                window.location = "/login"
            });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User Type: </label>
                        <select id="opt" 
                               className="form-control" 
                               value={this.state.type}
                               onChange={this.onChangeType}
                               >
                                       <option value="select">Select</option>
                                       <option value="applicant">Applicant</option>
                                       <option value="recuiter">Recuiter</option>

                        </select>
                    </div>
                    <div className="form-group common">
                        <label>Name: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.name}
                               onChange={this.onChangeUsername}
                               />
                    </div>
                    <div className="form-group common">
                        <label>Email: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                               />  
                    </div>
                    <div className="form-group common">
                        <label>Password: </label>
                        <input type="text" 
                               className="form-control" 
                               name = "password"
                               value={this.state.password}
                               onChange={this.onChange}
                               />  
                    </div>
                    <div className="form-group applicant">
                        <label>Education: </label>
                        <Button id = "addmore" onClick = {this.fun}>Add More</Button>
                        <div id = "ed-1">
                        <label>Institution Name</label>
                        <input type="text" 
                               className="form-control" 
                               name = "ed00"
                               value={this.state.ed00}
                               onChange={this.onChange}
                               />
                        <label>Start Year</label>
                        <input type ="number"
                                className="form-control"
                                name = "ed01"
                                value = {this.state.ed01}
                                onChange = {this.onChange}
                        />
                        <label>End Year</label>
                        <input type ="number"
                                name = "ed02"
                                className="form-control"
                                value = {this.state.ed02}
                                onChange = {this.onChange}
                        />
                        </div>
                        <div id = "ed-2">
                        <label>Institution Name</label>
                        <input type="text" 
                                name = "ed10"
                               className="form-control" 
                               value={this.state.ed10}
                               onChange={this.onChange}
                               />
                        <label>Start Year</label>
                        <input type ="number"
                                 name = "ed11"
                                className="form-control"
                                value = {this.state.ed11}
                                onChange = {this.onChange}
                        />
                        <label>End Year</label>
                        <input type ="number"
                                name = "ed12"
                                className="form-control"
                                value = {this.state.ed12}
                                onChange = {this.onChange}
                        />
                        </div>
                        <div id = "ed-3">
                        <input type="text" 
                                name = "ed20"
                               className="form-control" 
                               value={this.state.ed20}
                               onChange={this.onChange}
                               />
                        <label>Start Year</label>
                        <input type ="number"
                                name = "ed21"
                                className="form-control"
                                value = {this.state.ed21}
                                onChange = {this.onChange}
                        />
                        <label>End Year</label>
                        <input type ="number"
                                name = "ed22"
                                className="form-control"
                                value = {this.state.ed22}
                                onChange = {this.onChange}
                        />
                        </div>
                    </div>
                    
                    <div className="form-group applicant" >

                    <label>Skills:</label>

                        <select name="skills" 
                        onChange={this.onChange} value={this.state.skills} multiple={true}>
                        <option value="C">C</option>
                        <option value="c++">C++</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        </select>
                        <label>Add More :</label>
                        <input type="text" name = "skilla1" onChange = {this.onChange} value = {this.state.skilla1}/>
                        <input type ="text" name = "skilla2"onChange = {this.onChange} value = {this.state.skilla2}/>
                        <input type ="text" name = "skilla3"onChange = {this.onChange} value = {this.state.skilla3}/>
                    </div>
                    <div className="form-group applicant">
                        <label>Rating</label>
                        <input type="range" min="0" max="5" name = "rating" onChange = {this.onChange} value ={this.state.rating}></input>
                    </div>
                    <div className="form-group applicant">
                        <label>CV/Resume PDF</label>
                        <input type="file" name="upload" accept="application/pdf"/>
                    </div>
                    <div className="form-group applicant">
                        <label>Profile Image in JPG format</label>
                        <input type="file" name="upload" accept="application/jpg"/>
                    </div>

                    <div className="form-group recuiter">
                        <label>Contact No: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.contactno}
                               onChange={this.onChange}
                               name = "contactno"
                               />  
                    </div>
                    <div className="form-group recuiter">
                        <label>Bio: </label>
                        <textarea  maxLength="250" className="form-control" 
                        value={this.state.bio} 
                        onChange= {this.onChange}
                         name ="bio">
                        </textarea> 
                    </div>
                    <div className="form-group common">
                        <input type="submit" value="Register" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}