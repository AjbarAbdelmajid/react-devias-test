import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card,Modal , CardContent,Button, Grid, Typography, Avatar } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    backgroundColor: 'linear-gradient(45deg, #FF6B8B 90%, #FF8E53 100%)',
    color: theme.palette.primary.contrastText, 
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 100
  },
  avatar: {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  }
}));
const addUser = () =>{
  alert('dfsdf')
}
const TotalProfit = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Button onClick={()=>addUser()} variant="contained" >      
        <Grid
          container
          justify="space-between"
        >
          <Grid alignContent={'center'} item>
              <Avatar className={classes.avatar}>
                <PersonAddIcon className={classes.icon} />
              </Avatar>
              add user
          </Grid>
        </Grid>
    </Button>
  );
};

TotalProfit.propTypes = {
  className: PropTypes.string
};

export default TotalProfit;
