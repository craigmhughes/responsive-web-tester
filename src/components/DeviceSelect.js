import React from 'react';
import {motion} from 'framer-motion';

import SmallMobile from '../assets/svg-art/Small Mobile.svg';
import LargeMobile from '../assets/svg-art/Large Mobile.svg';
import Tablet from '../assets/svg-art/Tablet.svg';
import Laptop from '../assets/svg-art/Laptop.svg';
import Desktop from '../assets/svg-art/Desktop.svg';

import DeviceOption from './DeviceOption';


class DeviceSelect extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      activeDevices: [null, null]
    };

    this.setActiveDevice = this.setActiveDevice.bind(this);
  }

  componentDidMount(){
    if(this.props.url == null){
      this.props.history.push("/search");
      return false;
  }
  }

  setActiveDevice(option, index){
    this.setState({
      activeDevices: option > 0 ? [ this.state.activeDevices[0], [option, index] ] :
        [ [option, index], this.state.activeDevices[1] ]
    });
  }
  
  render(){

    //  Controls Framer Motion animation states.
    const pageTransition = {
      in: {
        opacity: 1,
        x: "100%",
      },
      init: {
        opacity: 1,
        x: 0,
      },
      out: {
          opacity: 0,
          x: "-100%",
      }
    };

    // Device information to be rendered.
    const deviceInfo = [
      {
          title: "Small Mobile",
          dimensions: "375 x 667"
      },
      {
          title: "Large Mobile",
          dimensions: "411 x 823"
      },
      {
          title: "Tablet",
          dimensions: "1024 x 768"
      },
      {
          title: "Small Laptop",
          dimensions: "1280 x 800"
      },
      {
          title: "Desktop",
          dimensions: "1680 x 1050"
      },
    ];

    const deviceIcons = [
      SmallMobile,
      LargeMobile,
      Tablet,
      Laptop,
      Desktop
    ];

    let activeDevices = [this.state.activeDevices[0] !== null ? this.state.activeDevices[0][1] : null,
      this.state.activeDevices[1] !== null ? this.state.activeDevices[1][1] : null];

    let deviceOptions = [[],[]];

    // Run through options and create elements for them.
    deviceInfo.forEach(info => {
      let index = deviceInfo.indexOf(info);
      // Push to Option One array
      deviceOptions[0].push(<DeviceOption key={index} index={index} title={info.title} dimensions={info.dimensions} 
        option={0} activeDevice={activeDevices[0]} setActiveDevice={this.setActiveDevice} icon={deviceIcons[index]}/>);
      // Push to Option Two array
      deviceOptions[1].push(<DeviceOption key={index} index={index} title={info.title} dimensions={info.dimensions} 
        option={1} activeDevice={activeDevices[1]} setActiveDevice={this.setActiveDevice} icon={deviceIcons[index]}/>);
    });

    return(
        <motion.main className="container" id="device-select"
            initial="in"
            animate="init"
            exit="out"
            variants={pageTransition}
        >
            <header>
                <h1>Choose devices to compare</h1>
            </header>

            <section className="body">
              <section>
                <h2 className="subtitle">Option One</h2>
                <ul className="device-list">
                  {deviceOptions[0]}
                </ul>
              </section>
              <section>
                <h2 className="subtitle">Option Two</h2>
                <ul className="device-list">
                  {deviceOptions[1]}
                </ul>
              </section>
            </section>

            <section className="footer">
                <button className="primary-btn btn" onClick={()=>{
                    this.props.setDevices([this.state.activeDevices[0][1], this.state.activeDevices[1][1]]);
                    this.props.history.push("/view");
                  }}>View Devices</button>
            </section>
        </motion.main>
    );
  }
}

export default DeviceSelect;
