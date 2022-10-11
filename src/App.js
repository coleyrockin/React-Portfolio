import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';


import About from './components/About';

class App extends Component() {
  render() {
    return (
      <HashRouter basename='/'>
        <div className='app'>
          <header />
          <main>
            <Route exact path="/about" component={About} />
          </main >
          <footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
