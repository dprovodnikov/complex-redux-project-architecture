import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../context';

class User extends Component {
  constructor() {
    super();

    this.fetchUsers = this.fetchUsers.bind(this);
    this.renderUser = this.renderUser.bind(this);
  }

  componentDidMount() {
    this.fetchUsers();
  }
  
  fetchUsers() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return (
      <li key={user.id}>
        {user.name}
      </li>
    );
  }

  render() {
    const { users } = this.props;

    if (!users.length) {
      return <div>No users found</div>
    }

    return (
      <ul>
        {users.map(this.renderUser)}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user.list,
  };
};

export default connect(mapStateToProps, actions.user)(User);
