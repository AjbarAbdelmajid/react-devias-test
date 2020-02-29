
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button,Fade,TextField , Backdrop, Modal } from '@material-ui/core';


class UsersToolbar extends React.Component {
    constructor (props, context){
        super(props, context);
        this.state = {
            classes : makeStyles(theme => ({
                formStyl: {
                  '& .MuiTextField-root': {
                    margin: theme.spacing(1),
                    width: 200,
                  },
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
              })),
            newUser : {
                'firstName' : '',
                'lastName' : '',
                'email' : '',
                'imgFile' : ''
            },
            open : false,
        }
    }
    
    handleOpen = () => {
      this.setState({open : true})
    };
    handleClose = () => {
      this.setState({open : false})
    };
    handlechange = (e) => {
    alert(e.target.value)
    //setNewUser(["firstName" = 'w']);
    this.setState({open : false})
  };
    render(){
        
        const useStyles = makeStyles(theme => ({
            formStyl: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: 200,
            },
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
        
        
        const UsersToolbar = props => {
            const { className, ...rest } = props;
        
            const classes = useStyles();
            const [open, setOpen] = React.useState(false);
        const [newUser, setNewUser] = useState([])
            const handleOpen = () => {
            setOpen(true);
            };
            const handleClose = () => {
            setOpen(false);
            };
            const handlechange = () => {
            alert('sdf')
            //setNewUser(["firstName" = 'w']);
            setOpen(false);
            };
        
            return (
            <div
                {...rest}
                className={clsx(classes.root, className)}
            >
                <div className={classes.row}>
                <span className={classes.spacer} />
                <Button
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
                    <form className={classes.formStyl} noValidate autoComplete="off">
                        <TextField
                        label="First name"
                        id="firstname"
                        defaultValue="first name"
                        className={classes.textField}
                        margin="normal"
                        size="small"
                        />
                        <TextField
                        label="Last Name"
                        id="lastname"
                        defaultValue="lastname"
                        className={classes.textField}
                        margin="normal"
                        size="small"
                        />
                        <TextField
                        label="email"
                        id="email"
                        defaultValue="email@email.com"
                        className={classes.textField}
                        margin="normal"
                        size="small"
                        />
                        
                    </form>
                    </div>
                </Fade>
                </Modal>
            </div>
            );
        };
    }
    
};


UsersToolbar.propTypes = {
  className: PropTypes.string
};


export default UsersToolbar;
