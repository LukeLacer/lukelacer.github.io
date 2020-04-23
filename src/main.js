import React from "react";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Works from "./components/works/works";
import Hobbies from "./components/hobbies/hobbies";
import { Switch, Route, Router } from 'react-router-dom';

const Main = () => (
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/contact'><Contact /></Route>
        <Route exact path='/about'><About /></Route>
        <Route exact path='/works'><Works /></Route>
        <Route exact path='/hobbies'><Hobbies /></Route>
      </Switch>
);

export default Main;