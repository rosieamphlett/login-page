import React, { Component } from 'react';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    render () {
        return (
          <div className="content">
          <form>
            <div className="login-header">
              <img src= {require('./pics/Vector.png')} alt="key"/>
              <h2>Log In</h2>
            </div>

            <fieldset className="form-content">
              <label htmlFor="email">Email Address*</label>
              <input type="email" id="email" name="email" placeholder=" E.g. hello@examplesite.com" value={this.state.email} onChange={this.handleChange}/>
    
              <label htmlFor="password">Password*</label>
              <input type="password" id="password" name="password" placeholder=" ************" value={this.state.password} onChange={this.handleChange}/>

              <div className='errors'>
                {(!this.validateEmail() && this.state.email !== '') && <p>Please enter a valid email address</p>}
                {(!this.validatePassword() && this.state.password !== '') && <p>Password must be 8 or more characters</p>}
              </div>

              <button type="submit" className="submit" disabled={!this.validateForm()}>Log In</button>
          
              <span className="forgot-pwd">Forgot password?</span>
              <span className="sign-up">No account? 
                    <span className="clickon-signup"> Sign up</span>
              </span>
            </fieldset>
          </form>
          </div>)
      }

      handleChange = (event) => {
        let { name, value } = event.target
        this.setState({
            [name]: value
        })
      };

      validateEmail() {
        return this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      }

      validatePassword() {
        return this.state.password.match(/^\w{8,}$/)
      }

      validateForm() {
         return this.validateEmail() && this.validatePassword()
      }
}

export default Login;