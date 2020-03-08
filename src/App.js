import React from 'react';
import {Route, BrowserRouter as Router, Switch, withRouter} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';


import "./App.css";
import Home from './components/Home';
import Search from './components/Search';
import DeviceSelect from './components/DeviceSelect';
import View from './components/View';

class App extends React.Component {
  static displayName = App.name;
  
  constructor(props){
      super(props);

      this.state = {
        url: null,
        urlFail: null,
        selectedDevices: null
      };

      this.useUrl = this.useUrl.bind(this);
      this.setDevices = this.setDevices.bind(this);

      // Refs
      this.testIframe = React.createRef();
  }

  /**
   * Check and use URL if it passes conditions.
   * @param {*} url - URL string passed from Search prop
   * @returns String to pass to URL.
   */
  useUrl(url){

    if(url.length < 1){
      return false;
    }

    this.setState({
      url: `http://${url}`
    });

    return "device-select";
  }

  setDevices(devices){

    if(devices[0] == null || devices[1] == null){
      return false;
    }

    this.setState({
      selectedDevices: devices
    });
  }

  /**
   * TODO: Validate HTML, CSS & SVGs.
   * Look up front end framework (Gatsby, Rust, etc)
   */
  render(){
    return (
      <Router className="App">
        <iframe src={this.state.url} ref={this.testIframe} height={1} width={1}/>
        <AnimatePresence exitBeforeEnter>
          <Switch location={this.props.history} key={this.props.history}>
            <Route exact path='/' render={(props)=><Home history={props.history}/>} />
            <Route exact path='/search' render={(props)=><Search useUrl={this.useUrl} history={props.history}/>} />
            <Route exact path='/device-select' render={(props)=><DeviceSelect history={props.history} url={this.state.url} setDevices={this.setDevices}/>} />
            <Route exact path='/view' render={(props)=><View history={props.history} selectedDevices={this.state.selectedDevices} url={this.state.url}/>} />
          </Switch>
        </AnimatePresence>
      </Router>
    );
  }
}

export default App;
