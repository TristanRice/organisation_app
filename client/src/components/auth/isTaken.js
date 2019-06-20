import React, { Component } from 'react';
import axios from 'axios';
import Api from "../../utils/api";

class IsTaken extends Component {
  constructor(props) {
    super(props);

    this.value = this.props.value;
    this.startLoading = this.props.startLoading;
    this.name = this.props.name;

    this.state = {
      isLoading: true,
      isTaken: false,
      startLoading: false,
      checkTaken: this.props.checkTaken || false
    };
  }

  render() {
    if (this.props.checkTaken) {
      this.setState({isLoading: true});
      Api.post(`/api/user/${this.name}/isTaken`)
        .then(res => {
          this.setState({isLoading: false, isTaken: res.isTaken});
        })
        .catch(e => {
          //if there is an error, then we should just not show if it is taken or not
          this.setState({checkTaken: false});
          console.log("😲 There was an error "+e);
        });
    }

    return (
      <div>
        {this.state.checkTaken &&
          {this.state.isLoading ? (
            <i class="fas fa-refresh fa-spin" class="loading_icon" />
          ) : (
            {this.state.isTaken ? (
              //show them a cross if it is taken
              <i clas="fas fa-times" class="cross_icon" />
            ) : (
              //otherwis, show them a tick
              <i class="fas fa-check" class="tick_icon" />
            )}
          )}
        }
      </div>
    );
  }
}

export default Api;
