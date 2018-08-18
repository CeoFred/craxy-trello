import React, { Component } from "react";

import Button from "@material-ui/core/Button";
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.removeTodo = this.removeTodo.bind(this);
                this.doneTodo = this.doneTodo.bind(this);
    }
removeTodo(id){
    this.props.removeTodo(id);
}
doneTodo(id,text){
  this.props.doneTodo(id,text);
}
    render() {
        return ( <div className="list">
            {this.props.todo.text}
            <Button className="btn" onClick={(e) => this.removeTodo(this.props.id)}
             variant="contained" color="primary"> Delete</Button>


             <Button className="btn" onClick={(e) => this.doneTodo(this.props.todo.id,this.props.todo.text)}
              variant="contained" color="default"> Done</Button>
            </div> );
    }
}

export default TodoItem;
