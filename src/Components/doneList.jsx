import React, { Component } from "react";

import Button from "@material-ui/core/Button";
class DoneList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
revertDone(text){
  this.props.revertDone(text);
}
    render() {
        return (<div>
      >> {this.props.doneList.text}
      <Button color="primary" onClick={(e) => this.revertDone(this.props.doneList.text)}>Revert</Button>
            </div>
          );

    }
}

export default DoneList;
