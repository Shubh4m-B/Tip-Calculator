import React, { Component } from 'react'
import Container from './Components/Container'

import './App.css'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <img src="images/logo.svg" alt="" />
        <Container />
      </div>
    )
  }
}

export default App
