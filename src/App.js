import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import View from './components/View';

class App extends React.Component {
  constructor(props){
      super(props);

      this.state = {
        url: null,
      };

      this.setUrl = this.setUrl.bind(this);
  }

  setUrl(url){
    if(!url.includes("http://" && !url.includes("https://"))){
      console.log("Must be a web address!");
    }

    this.setState({url: url});
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Switch>

            <Route path="/view">
              <View/>
            </Route>

            <Route path="/">
              <Home setUrl={this.setUrl}/>
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
