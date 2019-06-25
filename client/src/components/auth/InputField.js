'use strict';

import React, { Component } from 'react';
import Api from '../../utils/api';
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faCross, faCheck } from "@fortawesome/free-solid-svg-icons";

console.log(faSync);

class InputField extends Component {
  constructor(props) {
    super(props);

    this.register = this.props.register === "register";
    this.name = this.props.name;

    this.state = {
      type: this.props.type || "text", //if no type is set just put it to 'text'
      value: "",
      isTaken: false,
      checkTaken: false,
      icon: null,
      isSelected: false,
      class: "login_form_input_box"
    };

    this.showPassword   =   this.showPassword.bind(this);
    this.hidePassword   =   this.hidePassword.bind(this);
    this.onChange       =   this.onChange.bind(this);
    this.onBlur         =   this.onBlur.bind(this);
    this.onFocus        =   this.onFocus.bind(this);
  }

  showPassword() {
    this.setState({type: "text"});
  }

  hidePassword() {
    this.setState({type: "password"});
  }

  onChange(e) {
    console.log(e.target.value);
    this.setState({value: e.target.value});
  }

  onBlur(e) {
    this.setState({checkTaken: true, isSelected: false});
    if (this.register) {
      this.setState({
        icon: "faSync"
    });
    Api.post(`/api/user/${this.name}/isTaken`)
      .then(res => {
        this.setState({
          icon: res.isTaken ? "times" : "check"
        });
      })
      .catch(e => {
        console.log("😲 There was an error: "+e);
        this.setState({icon: null});
      });
    }
  }

  onFocus(e) {
    this.setState({isSelected: true});
  }

  render() {
    const classes = `${this.state.class} ${this.state.isSelected ? "selected": ""}`;
    return (
      <div>
        <input
          type={this.state.type}
          onBlur={this.onBlur}
          className={classes}
          onChange={this.onChange}
          onFocus={this.onFocus}
          placeholder={this.name}
        />
        {this.register &&
          <FontAwesomeIcon
            icon={faSync}
          />
        }


      </div>
    );
  }
}

export default InputField;
