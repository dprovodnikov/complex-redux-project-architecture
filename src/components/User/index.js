import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../context/actionRegistry';

class User extends Component {
  constructor() {
    super();

    this.fetchUser = this.fetchUser.bind(this);
  }
  
  fetchUser() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchUser}>
          Fetch user
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapActionsToProps = {
  fetchUser: actions.user.fetchUser,
};

export default connect(mapStateToProps, mapActionsToProps)(User);
