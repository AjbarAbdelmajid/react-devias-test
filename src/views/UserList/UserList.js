import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersTable } from './components';
import mockData from './data';



class UserList extends React.Component {
  constructor(props, context) {
        super(props, context);

        this.state = {
          users: mockData,
          useStyles : makeStyles(theme => ({
            root: {
              padding: theme.spacing(3)
            },
            content: {
              marginTop: theme.spacing(2)
            }
          }))
        };
    }

  render(){
     
    let classes = this.state.useStyles;
  
      return (<div className={classes.root}>
          
          <div className={classes.content}>
            <UsersTable />
          </div>
        </div>
      )
  }
  
};


export default UserList;
