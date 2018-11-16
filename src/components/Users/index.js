import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../context';

class User extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
    };

    this.fetchUsers = this.fetchUsers.bind(this);
    this.renderUser = this.renderUser.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  componentDidMount() {
    this.fetchUsers();
  }
  
  fetchUsers() {
    this.props.fetchUsers();
  }

  handleInput(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleAddClick() {
    const { name } = this.state;
    
    this.props.createUser(name);
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
    const { name } = this.state;

    return (
      <div>
        {!users.length &&
          <div>No users found</div>
        }

        <ul>
          {users.map(this.renderUser)}
        </ul>

        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleInput}
        />

        <button type="button" onClick={this.handleAddClick}>
          Add
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user.list,
  };
};

const mapActionsToProps = {
  fetchUsers: actions.user.fetchUsers,
  createUser: actions.user.createUser,
};

export default connect(mapStateToProps, mapActionsToProps)(User);
