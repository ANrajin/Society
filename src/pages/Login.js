import React, { Component } from 'react'
import Footer from '../components/Footer'

export default class Login extends Component {

   constructor(props){
           super(props);
           this.state={username:'',password:''};
   }

   handleInputChange=(e)=>{
     this.setState({[e.target.name]:e.target.value});
   }

   handleLogin=(e)=>{
     e.preventDefault();
     
     //console.log(this.state.username+","+this.state.password);
    
      if("jahid"==this.state.username && "111111"==this.state.password){
         
         sessionStorage.user = JSON.stringify({username:'jahid',role_id:'1'});

         window.location="/home";

      }else{
        alert('Incorrect username and password');
      }


   }
    render() {
        return (
            <>
            <div className="hold-transition login-page">
                <div className="login-box">
  <div className="login-logo">
    <a href="#"><b>Admin</b>LTE</a>
  </div>
 
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in to start your session</p>

      <form  onSubmit={this.handleLogin}>
        <div className="input-group mb-3">
          <input type="text" name="username" onChange={this.handleInputChange} className="form-control" placeholder="Username" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" name="password" onChange={this.handleInputChange} className="form-control" placeholder="Password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
        
          <div className="col-4">
           
            <input type="submit" className="btn btn-primary btn-block" value="Sign In" />
          
          </div>
         
        </div>
      </form>

      

      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p className="mb-0">
        <a href="register.html" className="text-center">Register a new membership</a>
      </p>
    </div>

  </div>
</div>
</div>
<Footer />
            </>
        )
    }
}
