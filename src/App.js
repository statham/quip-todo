import React, { Component } from 'react';
import TodoListContainer from './containers/TodoListContainer';
import AddTodo from './containers/AddTodo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
