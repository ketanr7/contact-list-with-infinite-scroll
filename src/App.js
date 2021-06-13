import React,{useState,useEffect} from 'react';
import {
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { Container } from 'react-bootstrap';
import './App.css';
import LoginForm from './components/LoginForm'
import ContactList from './components/ContactList'

function App() {
  const loggedInUser = localStorage.getItem('user');
  const foundUser = JSON.parse(loggedInUser);
  
  return (
        <Switch>
          <Route
            exact
            path="/home"
            render={() => {
              console.log(foundUser,'hjgj')
                return (
                    localStorage.getItem('user') ?
                    <ContactList />  :
                    <Redirect to="/" /> 
                )
            }}
          />

          <Route path="/">
            <LoginForm />
          </Route>
        </Switch>
  );
}

export default App;