
import React, { Component } from 'react';


import Header from './components/header'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div style={{height:'100%'}}>
        <Header/>
        <Footer/>
      </div>
    );
  }
}
export default App
