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
  let counter = users.filter(user=> user.active === true ).length;

  const classes = useStyles();
  const TotalUsersNbr = users.length;
  const nbractiveUsers = users.filter(user=> user.active === true ).length
  return (
    <div className={classes.root}>

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
