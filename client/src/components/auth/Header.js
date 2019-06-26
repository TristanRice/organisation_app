import React, { Component } from 'react';
import Logo from "../logo-placeholder.svg"
import "./style.css";

class Header extends Component {
  render( ) {
    return (
      <div className="login_form_header_wrapper">
        <h1 className="login_form_header">
          Login
        </h1>
        <img
          src={ Logo }
          className="login_form_header_logo"
        />
      </div>
    )
  }
}

export default Header;
