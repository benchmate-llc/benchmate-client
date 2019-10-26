import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Redirect} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
//import Image from './guy.jpg';
import Profile from '../Profile/Profile';

class Home extends React.Component{
    constructor(props) {
        super()
        this.state = {
            profile: {
                email: "me@me.com",
                firstName: "johnny",
                lastName: "sreen",
                age: 22,
                weight: 220 ,
                height: 220,
                gender: "gender"
            }
        }
    }

    // componentDidMount = () => {
    //     const props_ = this.props
    //     this.setState({
    //         props_
    //     })
    // }

    render (){
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h5" align="left" display="flex" style={{flex:1}}>
                            BenchMate
                        </Typography> 
                        <Button color='inherit' justify="flex-end">Logout</Button>
                    </Toolbar>
                </AppBar>
                <div>
                    {/*
                    <img align="left" src={Image} width="15%" alt="image" />
                    <div align="left">
                        <Typography variant="h5" align="center">Welcome, {this.state.firstName} {this.state.lastName}</Typography>
                        <Typography variant="h5">age: {this.state.age}</Typography>
                        <Typography variant="h5">weight: {this.state.weight}</Typography>
                        <Typography variant="h5">height: {this.state.height}</Typography>
                        <Typography variant="h5">gender: {this.state.gender}</Typography>
                    </div>*/}
                    <Profile profile={this.state.profile} />
                </div>
                
            </div>
        )
    }
}

export default Home;