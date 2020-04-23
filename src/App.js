import React, { Component } from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import Main from './main';

class App extends Component {
  render() {
    return (
      <div>
        <Header />,
        <Main />
      </div>
    );
  }
}

export default App;