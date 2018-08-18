
import React, { Component } from 'react';
import  TodoInput from './todoinput'
import TodoItem from './TodoItem'
import DoneList from './doneList'
// imported needing components


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:[

            ], nextId:1,doneList:[]

         }

         this.addTodo = this.addTodo.bind(this);
         this.delTodo = this.delTodo.bind(this);
         this.doneTodo = this.doneTodo.bind(this);
         this.updateDoneState = this.updateDoneState.bind(this);
this.revertDone = this.revertDone.bind(this);
this.removeDone = this.removeDone.bind(this);
    }

revertDone(text){
  let fromDne = this.state.todos.slice();
   let inncre = this.state.nextId++
   fromDne.push({id:inncre,text:text});
   this.setState({
     todos:fromDne
   });
   this.removeDone(text);
   }

   removeDone(text){
     const filDone = this.state.doneList.filter((rem) => rem.text !== text );
this.setState({
  doneList:filDone
})
   }

    doneTodo(id,text){
      // console.log('added to the done list with id = ' + id);
  let doneList =  this.state.doneList.slice();
  doneList.push({id:id,text:text});
this.setState({
    doneList: doneList
  });
  const  todoid = id;
  const todotext =  text;

  // this was used so that the method updateDoneState can use agumennts from doneTodo method
  // you would also need to  bind 'this' updateDoneState as done in the constuctor method
  // binding events is very necessary, events are changes that you want to perfrom,any change you can think of.
  this.updateDoneState(todoid,todotext);
    }

    // adding a todo item,passing the text as an argument V
    addTodo(V){
        // add item to the todo list
        // alert('New item added' + ' ' + V);

        // deep copying of stateful todos array
        let todos = this.state.todos.slice();
        // pushing a new object to the array we copied/cloned
        todos.push({id: this.state.nextId, text: V});
        // updating the state
        this.setState({
          todos:todos,
          nextId:  this.state.nextId + 1
        })

    }

// deleting a  todo item by taking the items id and perfoming some actions to filter it frrom the existing array
    delTodo(id){
        // delete items in the todo list
        // console.log('Item deleted',id);
// filtering the curent state
        let delfil = this.state.todos.filter((todo) => todo.id !== id);
// updating the state
       this.setState({
          todos: delfil,
// decreasing the nextid object becasue we have taken one item away from the array,so we need to make that number available for use again.
  nextId: this.state.nextId - 1
        });
    }

// updating the state by filtering the todos array after sending the item to the done listing

  updateDoneState(id,text){
    let todos = this.state.todos.filter((todo) => todo.id !== id && todo.text !== text);
    this.setState({
      todos
    });
  }

    render() {
        return (
          <div>
            <div className="todo-listing">
     <h2 className="list-title">Craxy Trello</h2>

                <TodoInput addTodo={this.addTodo}/>
<ul>
                    {this.state.todos.map((todo) => {
                        return <TodoItem todo={todo} key={todo.id}
                        removeTodo={this.delTodo} doneTodo={this.doneTodo} id={todo.id}/>
                    })}
</ul>


                </div>
                <div className="done-listing">
                  <h2 className="todo-title">---DONE LIST---</h2>
                {
                  this.state.doneList.map((list) => {
                 return <DoneList revertDone={this.revertDone} key={list.id} doneList={list}/>
                  })
                }
                </div>


                </div>
         );
       }
    }
