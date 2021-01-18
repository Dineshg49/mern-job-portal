import React, {Component} from 'react';
import axios from 'axios';
import './Profile.css'
class Profile extends Component {
    
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
    componentWillMount() {
        console.log(this.state.details.type)
        if(this.state.details.type === "applicant")
        {
            var x =  document.getElementsByClassName("applicant");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "block";
              }
        }
        else
        {
            var x =  document.getElementsByClassName("recuiter");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "block";
              }
        }
    }

    render() {
        return (
            <div>
                { 
                    this.state.details.map((user, i) => {
                        if(user.type === "applicant"){
                           // console.log("applicant")
                        return (
                            <div key={user.name}>
                            <h1>Name :{user.name}</h1>   <br></br> 
                             <h1> Email : {user.email}</h1> <br></br>
                             <h1>Type : {user.type}</h1><br></br>
                             <h1>Skils :</h1> <ul> {
                                 user.skills.map((val,i) => {
                                     return (
                                             <li key={val}>{val}</li>
                                     )
                                 })
                            }
                            </ul>
                            <h1>Education :</h1> <ul> {
                                 user.education.map((val,i) => {
                                     return (
                                             <li key={val.c00}>{val.c00}</li>
                                     )
                                 })
                            }
                            </ul>
                            
                               <h1> Rating :{user.rating}</h1> <br></br>
                               <h1>Password :{user.password}</h1> <br></br>
                            </div>
                        )
                            }
                        else
                        {
                            return (
                                <div>
                                <h1>Name :{user.name}</h1>   <br></br> 
                                 <h1> Email : {user.email}</h1> <br></br>
                                 <h1>Type : {user.type}</h1><br></br>
                                   <h1>Contat No :{user.contactno}</h1> <br></br>
                                   <h1>Bio :{user.bio}</h1> <br></br>
                                </div>
                            )
                        }
                    })
                }
        </div>
        )
    }
}

export default Profile;