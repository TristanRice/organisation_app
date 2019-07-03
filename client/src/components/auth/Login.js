import React, { Component } from 'react';
import "./style.css";
import logo from "../logo-placeholder.svg"; //obviously this will be switched out for an actual logo

class Logo extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} />
      </div>
    )
  }
}



class Login extends Component {
  render( ) {
    return (
      <div className="login_form_wrapper">
        <h1 className="login_form_header">Login</h1>
        <div className="login_form_container">
          <div className="login_form_input_group">
            <input
              className="login_form_input_box"
              placeholder="Username"
            />
            <button className="login_form_submit_button">aaaa</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
