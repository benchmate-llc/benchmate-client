import React from 'react';
import './App.css';
import SignUp from './Components/SignUp/SignUp'
import SignIn from './Components/SignIn/SignIn';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const signupPageComponent = () => (<SignUp />);
    const signInPageComponent = () => (<SignIn/>);
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/signup' render = {signupPageComponent}></Route>
            <Route exact path='/' render = {signInPageComponent}></Route>
          </div>
        </Router>
      </div>
    );
  }
}