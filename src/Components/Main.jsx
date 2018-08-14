import React, { Component } from 'react'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:['Now','Tomorrow']
         }
         this.pushToList =  this.pushToList.bind(this)
    }
    pushToList = () => {

    }
    render() {
        return (
            <div>
                <h6>Simple Todo App</h6>
<div className="row">
    <div className="col-md-6 border">
<b>What do you want to do today?</b>
<form>
   <label htmlFor="list">Type:</label> <input type="text" />
   <br/>
   <input type="submit" onSubmit={this.pushToList} value="Add to List" className="btn btn-outline-success" />
</form>
    </div>
                    <div className="col-md-6">
                    <h2 className="badge badge-primary">Todo-List</h2>
{this.state.list.map((list) => {
return (<ul><li>{list}</li></ul>)
})}
                    </div>
</div>
                </div>
         );
    }
}

export default Main;
