import React, { Component } from 'react';
import "./style.css";
import Header from "./Header";
import InputField from './InputField';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password2Value: ""
    };

    this.username_requirements = [{
        verify: value => value.length >= 3 && value.length<=15,
        msg: "username must be between 3 and 15 characters"
      }, {
        verify: value => !!value.match(/^[a-z0-9]+$/i),
        msg: "Username must be alphanumeric"
      }];

      this.email_requirements = [{
        verify: value => true,
        msg: "Must be a valid email"
      }];

      this.password_requirements = [{
        verify: value =>  return (
          value === this.state.password2Value
          && this.state.password2Value
        ),
        msg: "Passwords must match"
      }]

      this.password2_requirements = [{
        verify: (value) =>{
          console.log(value);
          console.log(this.state.password2Value);
          console.log(value === this.state.password2Value);
        },
        msg: "Passwords must match"
      }];

      this.updatePassword2Value = this.updatePassword2Value.bind(this);
  }

  updatePassword2Value(val) {
    this.setState({
      password2Value: val
    });
  }

  render( ) {
    return (
      <div className="login_form_wrapper">
        <Header />
        <div className="login_form_container">
          <h1 className="login_form_header">Hello</h1>
          <div className="login_form_input_group">
            <InputField
              name="username"
              register="register"
              requirements={this.username_requirements}
            />
            <InputField name="email" type="email" />
            <InputField
              name="password"
              requirements={this.password_requirements}
            />
            <InputField
              name="password2"
              requirements={this.password2_requirements}
              changePass2Value={this.updatePassword2Value}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
