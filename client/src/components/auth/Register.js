import React, { Component } from 'react';
import "./style.css";
import Header from "./Header";
import InputField from './InputField';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render( ) {
    return (
      <div className="login_form_wrapper">
        <Header />
        <div className="login_form_container">
          <h1 className="login_form_header">Hello</h1>
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
