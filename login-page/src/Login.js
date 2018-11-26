import React, { Component } from 'react';

class Login extends Component {
    state = {
        email: '',
        password: '',
        formValid: false
    }

    render () {
        return (
          <form>
            <div className="login-header">
              <img src= {require('./Vector.png')} alt="key"/>
              <h2>Log In to The Coaching Manual</h2>
            </div>

            <div className="form-content">
              <div className="input">
                <h3 className="subheadings">Email Address*</h3>
                <input type="email" name="email" placeholder=" E.g. hello@thecoachingmanual.com" value={this.state.email} onChange={this.handleChange}/>
              </div>
    
              <div className='input password'>
                <h3 className="subheadings">Password*</h3>
                <input type="password" id="pwd" ref="pwd" name="password" placeholder=" ************" value={this.state.password} onChange={this.handleChange}/>
                {/* <span onClick={this.togglePassword} className={this.state.passwordIsHidden ? "glyphicon glyphicon-eye-open" : "glyphicon glyphicon-eye-close"}></span> */}
              </div>
    
              <button type="submit" className="submit" disabled={!this.state.formValid}>Log In</button>
            
            <span className="forgot-pwd">Forgot Password?</span>
            <span className="sign-up">No Account? <span className="clickon-signup"> Sign Up</span></span>
            </div>
          </form>
        )
      }
}

export default Login;