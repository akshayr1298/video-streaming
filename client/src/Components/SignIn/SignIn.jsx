
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { validEmail, validPassword } from '../../RegexValidation/RegexValidation';
import { severURl } from '../../Constant/Constant';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  
  const [email,setEmail] =  useState('')
  const [password,setPassword] = useState('')
  const [emailErr,setEmailErr] = useState(false)
  const [pswrdErr,setPswrdErr] = useState(false)
  const [userData,setUserData] = useState('')
  const navigate = useNavigate()


  const handelSubmit = async(event)=>{
    event.preventDefault()

    if(!validEmail.test(email)){
      setEmailErr(true)
    }
    if(!validPassword.test(password)){
      setPswrdErr(true)
    }

    const data = {email,password}

    setUserData(data)
 
    axios.post(`${severURl}signin`,data).then((res)=>{
      console.log('signIn success',res.data);
      navigate('/')

      
  }).catch((err)=>{
      console.log(err);

  }) 


   
  }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            {emailErr && <small  style={{ color: 'red' }}>Enter a valid email</small>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            {pswrdErr && <small  style={{ color: 'red' }}>Enter a valid password</small>}
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              data={userData}
              onClick={handelSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
               
              </Grid>
              <Grid item>
                <Link href="/signUp" variant="body2" >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
