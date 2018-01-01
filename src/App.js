
import React, { Component } from 'react';
//公共样式
import './common/main.css';


import Header from './components/header'
import Footer from './components/footer'

class App extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    );
  }
}
export default App
