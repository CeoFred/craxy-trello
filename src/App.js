import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
<Main/>
            <Button variant="contained" color="primary">
                Hello World
    </Button>
      </div>
    );
  }
}

export default App;
