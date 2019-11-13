import React, { Component } from 'react';
import './App.css';
import Currency from './Components/Converter'

class App extends Component {
  render() {
    return (
      <>
          <Currency render={()=> {}} />
      </>
    );
  }
}

export default App;
