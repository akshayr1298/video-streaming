
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { severURl } from '../../Constant/Constant';
import axios from 'axios'

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


    const hanldeLogOut = async()=>{
        axios.post(`${severURl}logout`,{
          withCredential:true
        }).then((res)=>{
          console.log(res);
          navigate('/signIn')
        }).catch((err)=>{
          console.log(err);
    
        })
      }
  
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
      <Button  color="inherit" onClick={hanldeLogOut}>
       Logout
      </Button>
    </Toolbar>
      </AppBar>
);
}

export default Navbar
