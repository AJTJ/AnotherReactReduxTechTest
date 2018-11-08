import React, { Component } from "react";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    const url = `https://randomuser.me/api/?results=20`;
    let users = [];
    async function getUsers() {
      try {
        console.log("connectiong to API");
        const response = await fetch(url);
        const json = await response.json();
        users = json.results;
      } catch (error) {
        console.log("error in API call:", error);
      }
    }
    getUsers();
    console.log(333, users);
    this.setState({
      users
    });
    console.log(this.state.users);
  }

  render() {
    return <div />;
  }
}

export default UserList;
