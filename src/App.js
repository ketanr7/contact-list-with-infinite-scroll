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

const App = () => {
  
  const isAuth = () => {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }
  return (
        <Switch>
          <Route
            exact
            path="/home"
            render={() => {
                return (
                    isAuth() ?
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