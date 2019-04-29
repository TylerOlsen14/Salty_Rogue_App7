import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import RecordList from './components/RecordList' 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <RecordList />
      </div>
    );
  }
}
export default App;
