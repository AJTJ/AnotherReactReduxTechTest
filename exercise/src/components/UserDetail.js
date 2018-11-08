import React from "react";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";

let capsFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const UserDetail = props => {
  let { name, email, phone, picture } = props.location.state;
  return (
    <React.Fragment>
      <Grid container justify="center">
        <div style={{ paddingTop: 30 }}>
          <img src={picture.large} alt={`${name.first} ${name.last}`} />
          <p>
            <span>{capsFirstLetter(name.first)} </span>
            <span>{capsFirstLetter(name.last)}</span>
          </p>
          <p>email: {email}</p>
          <p>phone: {phone}</p>
          <Button
            variant="contained"
            color="primary"
            onClick={props.history.goBack}
          >
            Back
          </Button>
        </div>
      </Grid>
    </React.Fragment>
  );
};

export default UserDetail;
