
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Navbar() {

    const classes = useStyles();
    const navigate  = useNavigate()
  
  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        Title
      </Typography>
      <Button color="inherit" onClick={()=>navigate('/signIn')}>
        SignIn
      </Button>
    </Toolbar>
      </AppBar>
);
}

export default Navbar
