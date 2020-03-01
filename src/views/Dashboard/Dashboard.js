import React from 'react';
import { makeStyles } from '@material-ui/styles';
import USERS from '../UserList';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = ({users}) => {

  const classes = useStyles();
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
