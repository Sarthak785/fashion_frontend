import { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


class Register extends Component{
  
  constructor(props){
    super(props)
    this.state= {
        fullname:"",
        email:"",
        password:"",
        phone:""
    }
    this.handleChange= this.handleChange.bind()
    this.register= this.register.bind()

}
handleChange=(event)=>{  //stores the changes
    this.setState({    //set the changes
        [event.target.name]: event.target.value
    })}
    
register=()=>{
  let valid_data= true
  this.state.fullname_error=null
  this.state.email_error=null
  this.state.password_error=null
  this.state.phone_error=null
  if(this.state.fullname===""){
      this.state.fullname_error="full name is required"
      valid_data=false  
  }if(this.state.email===""){
    this.state.email_error="email is required"
    valid_data=false
}
if(this.state.password===""){
  this.state.password_error="password is required"
  valid_data=false
}
if(this.state.phone===""){
  this.state.phone_error="phone is required"
  valid_data=false
}this.setState({update:true})

if(valid_data){
  const data= {
    fullName:this.state.fullname,
    email:this.state.email,
    phone:this.state.phone,
    password:this.state.password
  }  
  const register_url="http://localhost:5000/user/register"
  axios.post(register_url,data).then((res)=>{
    console.log(res.data)
    if(res.data.success===true){
      console.log("data has been successfully registered")
      
    }

  }).catch((error)=>{
    this.state.email_error= "something went wrong"

  })

}

    
}
    render(){
        return(
            <div>
        {/* Designined by CodingLab - youtube.com/codinglabyt */}
        <meta charSet="UTF-8" />
        <title> Responsive Registration Form | CodingLab </title>

        <link rel="stylesheet" href="style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="container">
          <div className="title">{this.state.fullname}</div>
          <div className="content">
            <div>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input type="text" name="fullname" onChange={this.handleChange} error={this.state.fullname_error!=null} placeholder="Enter your name"  />
                </div>
                <Link to="/">Go to About Page</Link>
                <div className="input-box">
                  <span className="details">Username</span>
                  <input type="text" placeholder="Enter your username" />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input type="text" name="email" onChange={this.handleChange} error={this.state.email_error!=null} placeholder="Enter your email"  />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input type="text" name="phone" onChange={this.handleChange} error={this.state.phone_error!=null} placeholder="Enter your number"  />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input type="text" name="password" onChange={this.handleChange} error={this.state.password_error!=null} placeholder="Enter your password"  />
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input type="text" placeholder="Confirm your password"  />
                </div>
              </div>
              <div className="gender-details">
                <input type="radio" name="gender" id="dot-1" />
                <input type="radio" name="gender" id="dot-2" />
                <input type="radio" name="gender" id="dot-3" />
                <span className="gender-title">Gender</span>
                <div className="category">
                  <label htmlFor="dot-1">
                    <span className="dot one" />
                    <span className="gender">Male</span>
                  </label>
                  <label htmlFor="dot-2">
                    <span className="dot two" />
                    <span className="gender">Female</span>
                  </label>
                  <label htmlFor="dot-3">
                    <span className="dot three" />
                    <span className="gender">Prefer not to say</span>
                  </label>
                </div>
              </div>
              <button type="button" onClick={this.register}>Register</button>
            </div>
          </div>
        </div>
      </div>
        );
    }
}
export default Register