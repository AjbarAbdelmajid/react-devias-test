import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';



class TotalUsers extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      usersList : this.props.usersList,
      selectedUsers: [],
      rowsPerPage : 10,
      page : 0,
      activeUsers : Math.ceil(this.props.active),
      totalUsersNbr : this.props.totalusersnbr,
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
  componentWillReceiveProps(nextProps) {
    if(nextProps){

      this.setState({activeUsers : parseInt(nextProps.active + '')});
      this.setState({totalUsersNbr : nextProps.totalusersnbr});
    };
    
  };
  render(){
    
    const { className, ...rest } = this.props;
    const {activeUsers, totalUsersNbr} = this.state;

    const classes = this.state.classes;
    const activeUsersPersentage =  Math.ceil(parseInt(activeUsers) * 100 / parseInt(totalUsersNbr));

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
              <Typography variant="h3">{totalUsersNbr}</Typography>
            </Grid>
            <Grid item>
              <Avatar className={classes.avatar}>
                <PeopleIcon className={classes.icon} />
              </Avatar>
            </Grid>
          </Grid>
          <div className={classes.difference}>
            
            
            <Typography
              className={classes.differenceValue}
              variant="body2"
            >
              
            </Typography>
            <Typography
              className={classes.caption}
              variant="caption"
            >{activeUsersPersentage}% active users
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
