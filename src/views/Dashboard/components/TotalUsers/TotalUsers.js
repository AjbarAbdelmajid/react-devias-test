import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';



class TotalUsers extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      usersList : this.props.users,
      selectedUsers: [],
      rowsPerPage : 10,
      page : 0,
      classes : makeStyles(theme => ({
        root: {},
        content: {
          padding: 0
        },
        inner: {
          minWidth: 1050
        },
        nameContainer: {
          display: 'flex',
          alignItems: 'center'
        },
        avatar: {
          marginRight: theme.spacing(2)
        },
        active: {
          color: 'red',
        },
        actions: {
          justifyContent: 'flex-end'
        }
      })),
    };
  };
  shouldComponentUpdate(nextProps, nextState, nextContext){
    alert('received props update '+ this.state.usersList[0].active);
}
  componentWillReceiveProps(nextProps) {
    alert(nextProps)
    alert('received props update '+ this.state.usersList[0].active);
  }
  render(){
    
    const {nbrActiveUsers,users, toatalUsers, className, ...rest } = this.props;


    const TotalUsersNbr = users.length;
    const ActiveUsers = users.filter(user=> user.active === true ).length
  
    const classes = this.state.classes;
    const activeUsersPersentage = parseInt(ActiveUsers) * 100 / parseInt(TotalUsersNbr);
    return (
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardContent>
          <Grid
            container
            justify="space-between"
          >
            <Grid item>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                TOTAL USERS
              </Typography>
              <Typography variant="h3">{TotalUsersNbr}</Typography>
            </Grid>
            <Grid item>
              <Avatar className={classes.avatar}>
                <PeopleIcon className={classes.icon} />
              </Avatar>
            </Grid>
          </Grid>
          <div className={classes.difference}>
            {activeUsersPersentage > 50 ? <ArrowUpwardIcon className={classes.differenceIcon} /> : 
                                     <ArrowDownwardSharpIcon className={classes.differenceIcon} />
            }
            
            <Typography
              className={classes.differenceValue}
              variant="body2"
            >
              {activeUsersPersentage}%
            </Typography>
            <Typography
              className={classes.caption}
              variant="caption"
            >
              active users
            </Typography>
          </div>
        </CardContent>
      </Card>
    );
  }
};

function mapStateToProps(state) {
  return {
    users : state.users.users,
  }
}

export default withRouter(connect(mapStateToProps)(TotalUsers));
