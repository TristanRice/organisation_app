import React, { Component } from 'react';
import "./style.css";
import "../logo-placeholder.svg"
import InputField from './InputField';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render( ) {
    return (
      <div className="login_form_wrapper">
        <div className="login_form_container">
          <div className="login_form_input_group">
            <InputField name="username" register="register" />
            <InputField name="email" type="email" />
            <InputField name="password" />
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
