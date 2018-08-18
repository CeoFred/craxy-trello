/*
*Titile:Craxy Trello App
* Developed by ceofred
* Open source for  beginners
*detailed explanations on the tough guys
*Zero erors
*created 16th August,2018. 1:58pm(nigeria)
*Features include: featurs for adding a todo list,sending the list to the done list,and reverting the item back to the todoList, has mini fucntion like The popurlar trello.
*Made use of dependencies from matrial-ui, install using yarn add @material-ui/core


*/
import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main';

class App extends Component {
  render() {
    return <div className="App">
        <div className="todo-wrapper">


          <Main />
        </div>
      </div>;
  }
}

export default App;
