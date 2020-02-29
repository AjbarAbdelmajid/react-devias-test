import React, {useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import USERS from '../UserList';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  TotalUsers,
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = ({users}) => {
  useEffect(() => {
    // Update the document title using the browser API
  });
  const classes = useStyles();
  const TotalUsersNbr = users.length;
  const nbractiveUsers = users.filter(user=> user.active === true ).length
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalUsers nbrActiveUsers = {nbractiveUsers} toatalUsers ={TotalUsersNbr} />
        </Grid>

      </Grid>
      <USERS />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    users : state.users.users,
  }
}

export default withRouter(connect(mapStateToProps)(Dashboard));
