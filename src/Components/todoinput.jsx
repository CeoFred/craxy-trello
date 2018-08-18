import React, { Component } from 'react';

import Button from "@material-ui/core/Button";
export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value:''
    };
    this.handleChange = this.handleChange.bind(this);
      this.addTodo = this.addTodo.bind(this);
  }

// handle input chanage event
  handleChange(e){
   this.setState({value: e.target.value});

//    console.log(this.state.value)

  }

    addTodo(value)  {
        if (value.length > 0)
        { this.props.addTodo(value);
            this.setState({value:''});
        }else{
            document.write("Empty fields dummy");
        }

     }

  render() {
    return <div>
        <input className="input" value={this.state.value} type="text"
         onChange={this.handleChange}  />

        <Button
         onClick={() => this.addTodo(this.state.value)}
         variant="contained" color="secondary">
          Add
        </Button>
      </div>;
  }
}
