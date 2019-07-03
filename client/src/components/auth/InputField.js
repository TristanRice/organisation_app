'use strict';

import React, { Component } from 'react';
import Api from '../../utils/api';
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faCross, faCheck } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from 'react-tooltip';

console.log(faSync);

class InputField extends Component {
  constructor(props) {
    super(props);

    this.register = this.props.register === "register";
    this.name = this.props.name;
    this.requirements = this.props.requirements
    this.changePass2Value = this.props.changePass2Value

    this.state = {
      type: this.props.type || "text", //if no type is set just put it to 'text'
      value: "",
      isTaken: false,
      checkTaken: false,
      icon: null,
      isSelected: false,
      class: "login_form_input_box",
      isValid: true,
      requirements: ""
    };

    this.showPassword     =   this.showPassword.bind(this);
    this.hidePassword     =   this.hidePassword.bind(this);
    this.onChange         =   this.onChange.bind(this);
    this.onBlur           =   this.onBlur.bind(this);
    this.onFocus          =   this.onFocus.bind(this);
    this.makeRequirements =   this.makeRequirements.bind(this);
  }

  makeRequirements(value) {
    let reqs = this.requirements.map((requirement) => {
        const isValid = requirement.verify(value) ? "valid": "invalid";
        return <li className={"requirement "+isValid}>{requirement.msg}</li>;
      }
    );
    this.setState({
      requirements: reqs
    });
  }

  showPassword() {
    this.setState({type: "text"});
  }

  hidePassword() {
    this.setState({type: "password"});
  }

  onChange(e) {
    this.changePass2Value(e.target.value);
    const value = e.target.value;
    this.setState({value: value});
    this.makeRequirements(value);
  }

  onBlur(e) {
    //First make sure that it is unique
    const value = e.target.value;
    this.setState({checkTaken: true, isSelected: false});
    if (this.register) {
      this.setState({
        icon: "faSync"
      });
      Api.post(`/api/user/${this.name}/isTaken`)
        .then(res => {
          this.setState({
            icon: res.isTaken ? "times" : "check",
            isValid: false
          });
        })
        .catch(e => {
          console.log("😲 There was an error: "+e);
          this.setState({icon: null});
        });
    }
  }

  onFocus(e) {
    this.makeRequirements(e.target.value);
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
          data-tip=""
          event="click"
        />

        {this.register &&
          <FontAwesomeIcon
            icon={faSync}
          />
        }

        {this.state.isSelected &&
          <ul>
            {this.state.requirements}
          </ul>
        }

        <ReactTooltip />
      </div>
    );
  }
}

export default InputField;
