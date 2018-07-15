import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TextArea} from './Markdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Markdown Preview - (The lazy way)</h1>
          <img className='App-logo' src='http://icons.iconarchive.com/icons/hopstarter/halloween-avatar/1024/Jack-o-lantern-icon.png'/>
        </header>
        <TextArea className="text-area" id='text'>

        </TextArea>
      </div>
    );
  }
}

export default App;
