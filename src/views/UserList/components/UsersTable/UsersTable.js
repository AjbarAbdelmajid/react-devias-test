import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import { activation } from "../../../../dataStore/action/userAction";
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  Avatar,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  Button
} from '@material-ui/core';



class UsersTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      usersList : this.props.usersList,
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

  handleSelectAll = event => {
    const { users } = this.props;

    let selectedUsers;

    if (event.target.checked) {
      selectedUsers = users.map(user => user.id);
    } else {
      selectedUsers = [];
    }
    this.setState({selectedUsers: selectedUsers});
  };
  handleSelectOne = (event, id) => {
      const selectedIndex = this.state.selectedUsers.indexOf(id);
      let newSelectedUsers = [];
  
      if (selectedIndex === -1) {
        newSelectedUsers = newSelectedUsers.concat(this.state.selectedUsers, id);
      } else if (selectedIndex === 0) {
        newSelectedUsers = newSelectedUsers.concat(this.state.selectedUsers.slice(1));
      } else if (selectedIndex === this.state.selectedUsers.length - 1) {
        newSelectedUsers = newSelectedUsers.concat(this.state.selectedUsers.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelectedUsers = newSelectedUsers.concat(
          this.state.selectedUsers.slice(0, selectedIndex),
          this.state.selectedUsers.slice(selectedIndex + 1)
        );
      }
      this.setState({selectedUsers: newSelectedUsers});
  };
  handlePageChange = (event, page) => {
    this.setState({page: page});
  };
  handleRowsPerPageChange = event => {
    this.setState({RowsPerPage: event.target.value});
  };

  handleActivation = (user, activeStatus) => {
    this.props.userActivation(user, activeStatus);
    this.setState({usersList : this.props.usersList})
  };

  componentWillReceiveProps({usersList}){
    this.setState({users : usersList})
  }

  useStyles = makeStyles(theme => ({
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
  }));

  render(){
    const { className, ...rest } = this.props;
    const { usersList } = this.state;

    return (
      <Card
        {...rest}
        className={clsx(this.state.classes.root, className)}
      >
        <CardContent className={this.state.classes.content}>
          <PerfectScrollbar>
            <div className={this.state.classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    { 
                      Object.keys(usersList[0]).map((fieldName, key)=>{
                        if(fieldName != 'id' && fieldName != 'avatarUrl'){
                          return (<TableCell key={key}>{fieldName}</TableCell>)
                        }
                        else if(fieldName === 'id')
                          return (<TableCell key={key} > </TableCell>)
                        })
                    }
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.usersList.slice(0, this.state.rowsPerPage).map(user => (
                    
                    <TableRow
                      className={this.state.classes.tableRow}
                      hover
                      key={user.id}
                      selected={this.state.selectedUsers.indexOf(user.id) !== -1}
                    >
                      <TableCell>
                          <Avatar
                                className={this.state.classes.avatar}
                                src={user.avatarUrl}
                              >
                          </Avatar>
                      </TableCell>
                      <TableCell>
                        <div className={this.state.classes.nameContainer}>
                          <Typography variant="body1">{user.name}</Typography>
                        </div>
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                      <Button onClick={()=>this.handleActivation(user.id, user.active)} color={ user.active ?  'secondary': 'primary' }  variant="contained" >
                      { user.active ?  'true': 'false' }
                      </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={this.state.classes.actions}>
          <TablePagination
            component="div"
            count={usersList.length}
            onChangePage={this.handlePageChange}
            onChangeRowsPerPage={this.handleRowsPerPageChange}
            page={this.state.page}
            rowsPerPage={this.state.rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
    );
  }
  
};

UsersTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};
const mapDispatchToProps = (dispatch) =>{
  return {
    userActivation : (userId, userStatus) => dispatch(activation(userId, userStatus))
  }
}
const mapStateToProps = state =>{
  return {
    usersList : state.users.users,
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersTable));
