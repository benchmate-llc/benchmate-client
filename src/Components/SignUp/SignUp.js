import React from 'react';
import {Avatar,CssBaseline,TextField,Grid,Box,Typography,Container,
  Button,withStyles,Paper} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
//import Cookies from 'universal-cookie';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {/* <Link color="inherit" href=""> */}
        BenchMate LLC
      {/* </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  root: {
      height: '100vh',
  },
  image: {
      backgroundImage: 'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/young-adult-man-swinging-ropes-while-fitness-royalty-free-image-952755662-1566586488.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  },
  paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
  },
  form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
  },
  submit: {
      margin: theme.spacing(3, 0, 2),
  },
});


class Signup extends React.Component{
  constructor(props) {
      super();
      this.state = {
        user: {
          email: "",
          password:"", 
          redirect: false,
          error: ""
        },
        isAuthenticated: false
      };
  }   

  // componentDidMount() {
  //   const auth = sessionStorage.getItem("pizzaAuth");
  //   if (auth) {
  //     this.setState({
  //       isAuthenticated: true
  //     });
  //     return;
  //   }
  // }

  handleChange = event => ({target}) => {
    this.setState({[event]: target.value});
  }

  handleSubmit = async (event) => {
    //const cookies = new Cookies();
    const apiLink = ""
    event.preventDefault();
    try {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(this.state.name === 0 || this.state.contactno.length === 0 || this.state.password.length === 0 || this.state.email.length === 0 || !re.test(this.state.email)) {
          this.setState({
              error:'Missing proper credentials.'
          })
      } else {
          let res = await axios.post(apiLink, {
            email: this.state.email,
            password: this.state.password
          })
          if(res){
            //debugger
            console.log("Sign up response   ", res)
            if(!res.data.success && res.data.err==='User already exists') {
              this.setState({
                //redirect: true,
                isAuthenticated: true
              })
            }
            else {
              this.setState({
                //redirect: true,
                isAuthenticated: true,
                //user: res.data
              })
              //cookies.set('token', res.data.token, { path: '/' });
            }
          }
      }
  } catch (err) {
      console.log(err);
  }
}
  
  handleKeyPress = event => {
    if(event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render() {
    // if (this.state.isAuthenticated) {
    //   return(
    //     <Redirect to={"/home"} />
    //   )
    // }
    const { classes} = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={this.handleChange('email')}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChange('password')}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.handleSubmit}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <Link to="/" variant="body2">
                      Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(Signup))