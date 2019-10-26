import React from 'react';
import './App.css';
import SignUp from './Components/SignUp/SignUp'
import SignIn from './Components/SignIn/SignIn';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const signupPageComponent = () => (<SignUp />);
    const signInPageComponent = () => (<SignIn />);
    const homePageComponent = () => (<Home />);
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/signup' render = {signupPageComponent}></Route>
            <Route exact path='/' render = {signInPageComponent}></Route>
            <Route exact path='/home' render = {homePageComponent}></Route>
          </div>
        </Router>
      </div>
    );
  }
}