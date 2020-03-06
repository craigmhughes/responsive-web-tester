import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';


import "./App.css";
import Home from './components/Home';
import Search from './components/Search';

class App extends React.Component {
  static displayName = App.name;
  
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
      <Router className="App">
        <AnimatePresence exitBeforeEnter>
          <Switch location={this.props.history} key={this.props.history}>
            <Route exact path='/' render={(props)=><Home history={props.history}/>} />
            <Route exact path='/search' render={(props)=><Search setUrl={this.setUrl} history={props.history}/>} />
          </Switch>
        </AnimatePresence>
      </Router>
    );
  }
}

export default App;
