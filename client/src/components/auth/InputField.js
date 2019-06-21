import React, { Component } from 'react';
import Api from '../../utils/api';
import "./style.css"

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
      icon: <div></div>,
      classList: ["login_form_input_box"]
    }

    this.showPassword = this.showPassword.bind(this);
    this.hidePassword = this.hidePassword.bind(this);
    this.onChange     = this.onChange.bind(this);
    this.onBlur       = this.onBlur.bind(this);
    this.onFocus      = this.onFocus.bind(this);
  }

  showPassword() {
    this.setState({type: "text"});
  }

  hidePassword() {
    this.setState({type: "password"});
  }

  onChange(e) {
    this.setState({value: e.target.value});
  }

  onBlur(e) {
    this.setState({checkTaken: true});
    if (this.register) {
      this.setState({
        icon: <i className="fas fa-refresh fa-spin loading_icon" />
      })
      Api.post(`/api/user/${this.name}/isTaken`)
        .then(res => {
          this.setState({
            icon: res.isTaken ? (
              <i className="fas fa-times cross_icon" />
            ) : (
              <i className="fas fa-check tick_icon" />
            )
          });
        })
        .catch(e => {
          console.log("😲 There was an error: "+e);
          this.setState({icon: <div></div>});
        });
    }
  }

  onFocus(e) {
    this.state.classList.push("selected");
  }

  render() {
    return (
      <div>
        <input
          type={this.state.type}
          onBlur={this.onBlur}
          className={this.classList.join(" ")}
          placeholder={this.name}
        />
        {this.state.icon}
      </div>
    );
  }
}

export default InputField;
