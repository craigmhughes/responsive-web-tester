import React from 'react';

import './App.css';

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
        <View viewUrl={this.state.url} searched={this.state.searched}/>
        <Home setUrl={this.setUrl}/>
      </div>
    );
  }
}

export default App;
