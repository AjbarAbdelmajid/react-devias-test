
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/styles';
import { Button,Fade,TextField , Backdrop, Modal,Grid,CardHeader, CardActions, CardContent, Divider, } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import { add_user } from "../../../../dataStore/action/userAction";
import {connect} from 'react-redux';

const useStyles = makeStyles(theme => ({
  formStyl: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  addUser: {
    marginBottom : '1.5%'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  textField: {

  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const UsersToolbar = props => {
  const {className, ...rest } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [newUser, setNewUser] = useState({'firstname': '', 'lastname' : '', 'email': '', 'picture': []});
  const [userIsCreated, setuserIsCreated] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setuserIsCreated(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handlechange = (event) => {
    const {files, value, name} = event.target;
    let DataHolder = newUser;
    name === 'picture' ? (DataHolder[name] = files[0]) :  (DataHolder[name] = value);
    setNewUser(DataHolder)
  };

  const handleSubmit = ()=>{
    props.add_user(newUser);
    setNewUser({'firstname': '', 'lastname' : '', 'email': '', 'picture': []})
      setuserIsCreated(true);
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button
        className={classes.addUser}
        onClick={handleOpen}
          color="primary"
          variant="contained"
        >
          Add user
        </Button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form className={classes.formStyl} autoComplete="off">
            <CardHeader subheader="" title="add user"/>              
              <Divider />
              <CardContent>
                <Grid item md={6} xs={12}>
                <TextField
                  label="First name"
                  name="firstname"
                  Defaultvalue = {newUser.firstname}
                  className={classes.textField}
                  onChange = {(event)=>handlechange(event)}
                  margin="normal"
                  size="small"
                />
                </Grid>
                <Grid item md={6} xs={12}>
                <TextField
                  label="Last Name"
                  name="lastname"
                  Defaultvalue = {newUser.lastname}
                  onChange = {(event)=>handlechange(event)}
                  className={classes.textField}
                  margin="normal"
                  size="small"
                />
                </Grid>
                <Grid item md={6} xs={12}>
                <TextField
                  Defaultvalue = {newUser.email}
                  label="email"
                  name="email"
                  onChange = {(event)=>handlechange(event)}
                  className={classes.textField}
                  margin="normal"
                  size="small"
                />
                </Grid>
                <Grid item md={6} xs={12}>
                  <Button className={classes.uploadButton} color="primary" variant="text" >
                    <input
                    label ="Upload File"
                      name="picture"
                      type="file"
                      onChange = {(event=>handlechange(event))}
                      
                    />
                  </Button>
                </Grid>
              </CardContent>
              <Divider />
              <CardActions>
                <Button variant="contained"  onClick={(event)=>handleSubmit()} component="label" type="submit">Register</Button>
              </CardActions>
                              
            </form>
            
            {userIsCreated && <div>
              <br></br>
                <Alert severity="success">user is created </Alert>
            </div> }
            
          </div>
        </Fade>
      </Modal>
    </div>
  );
};



UsersToolbar.propTypes = {
  className: PropTypes.string
};

function mapDispatchToProps(dispatch) {
  return {
    add_user : (user_data) => dispatch(add_user(user_data))
  }
}
function mapStateToProps(state) {
  return {
    users : state.users.users,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersToolbar));
