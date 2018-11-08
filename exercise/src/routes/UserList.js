import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { actions } from "../redux";

import { Grid, Card, Button } from "@material-ui/core";

let capsFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

let getUsers = async () => {
  const url = `https://randomuser.me/api/?results=20`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    const users = json.results;
    return users;
  } catch (error) {
    console.log("error in API call:", error);
  }
};

class UserList extends Component {
  componentDidMount() {
    if (this.props.users === undefined) {
      getUsers().then(result => {
        this.props.addUsers({ result });
      });
    }
  }

  render() {
    let { users } = this.props;
    return (
      <React.Fragment>
        <h1 className="usersTitle">Users</h1>
        <div className="newUsersButton">
          <Button
            onClick={() =>
              getUsers().then(result => {
                this.props.addUsers({ result });
              })
            }
            variant="contained"
            color="primary"
          >
            Get New Users
          </Button>
        </div>
        <Grid container justify="center">
          {users &&
            users.map((user, key) => (
              <Link
                to={{
                  pathname: `/userList/${user.id.value +
                    user.name.first +
                    user.name.last}`,
                  state: user
                }}
                key={key}
              >
                <Card className="userCard">
                  <p>
                    <span>{capsFirstLetter(user.name.first)} </span>
                    <span>{capsFirstLetter(user.name.last)}</span>
                  </p>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                </Card>
              </Link>
            ))}
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.usersReducer.users };
};

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
