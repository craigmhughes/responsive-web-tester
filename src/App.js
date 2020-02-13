import React from 'react';

import './App.css';
import ReactIcon from './assets/icons/react-brands.svg';

import Home from './components/Home';
import View from './components/View';

class App extends React.Component {
  constructor(props){
      super(props);

      this.state = {
        url: null,
        searched: false,
      };

      this.setUrl = this.setUrl.bind(this);
  }

  setUrl(url){
    this.setState({
      url: url,
      searched: true
    });
  }
  
  render(){
    return (
      <div className="App">
        <View viewUrl={this.state.url} searched={this.state.searched} setUrl={this.setUrl}/>
        <Home setUrl={this.setUrl}/>
        <p id="credit">Made with <a href="https://reactjs.org/"><img src={ReactIcon}/></a> by <a href="https://github.com/craigmhughes">Craig Hughes</a></p>
      </div>
    );
  }
}

export default App;
