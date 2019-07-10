import React from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
  handleInput = e => {
    console.log('Hello Input')
  }
  addItem = () => {
    console.log('Hello World!')
  }
  render() {
    return (
      <div className="App">
        <TodoList addItem={this.addItem}
        inputElement={this.inputElement} />
        
      </div>
    )
  }
}
export default App;
