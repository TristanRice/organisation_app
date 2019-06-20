import React, { Component } from 'react';
import IsTaken from './isTaken';

class InputField extends Component {
  constructor(props) {
    super(props);

    this.register = this.props.register || false;
    this.name = this.props.name;

    this.state = {
      type: this.props.type || "text", //if no type is set just put it to 'text'
      value: "",
      isTaken: false,
      checkTaken: true
    }

    this.showPassword = this.showPassword.bind(this);
    this.hidePassword = this.hidePassword.bind(this);
    this.onChange     = this.onChange.bind(this);
    this.onBlur       = this.onBlur.bind(this);
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
  }

  render() {
    return (
      <div>
        <input type={this.state.type} />
        {this.state.register &&
          <IsTaken
            value={this.state.value}
            checkTaken={this.state.checkTaken}
            name={this.props.name}
          />
        }
      </div>
    );
  }
}
