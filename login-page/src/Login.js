import React, { Component } from 'react';

class Login extends Component {
    state = {
        email: '',
        password: '',
        formValid: false,
        emailValid: false,
        passwordValid: false,
        errors: {email: '', password: ''}
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
              </div>

              <div className='errors'>
                {Object.keys(this.state.errors).map((fieldName, i) => {
                  if(this.state.errors[fieldName].length > 0){
                    return (<p className="errors" key={i}>{this.state.errors[fieldName]}</p>)        
                  } else {
                    return '';
                  }
                })}
              </div>

              <button type="submit" className="submit" disabled={!this.state.formValid}>Log In</button>
          
              <span className="forgot-pwd">Forgot password?</span>
              <span className="sign-up">No account? <span className="clickon-signup"> Sign up</span></span>
            </div>
          </form>
        )
      }

      handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        }, () => { this.validateField(name, value) })
      };
    
    
      validateField(fieldName, value) {
        let errors = this.state.errors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
    
          switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            errors.email = emailValid ? '' : 'Please enter a valid email address';
            break;
          case 'password':
            passwordValid = value.match(/^\w{8,}$/) ;
            errors.password = passwordValid ? '':'Password must contain at least 8 characters';
            break;
            default:
            break;
          }

          this.setState({
            errors: errors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm());
      }
    
      validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid});
      }
}

export default Login;