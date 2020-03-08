import React from 'react';
import {motion} from 'framer-motion';

import SmallMobile from '../assets/svg-art/Small Mobile.svg';
import LargeMobile from '../assets/svg-art/Large Mobile.svg';
import Tablet from '../assets/svg-art/Tablet.svg';
import Laptop from '../assets/svg-art/Laptop.svg';
import Desktop from '../assets/svg-art/Desktop.svg';

class View extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            deviceIcons: null,
            dimensions: null,
            deviceStyles: [null, null]
        };
    }

    componentDidMount(){
        if(this.props.selectedDevices == null || this.props.url == null){
            this.props.history.push("/device-select");
            return false;
        }

        const deviceIcons = [
            SmallMobile,
            LargeMobile,
            Tablet,
            Laptop,
            Desktop
        ];

        const deviceInfo = [
                [375, 667],
                [411, 823],
                [768, 1024],
                [1280, 800],
                [1680, 1050]
        ];

        // Create styles to scale iframe into svg frame correctly.
        const styles = [
            {marginTop: "-6.75em", transform: "scale(0.4)"},
            {marginTop: "calc(-10.5em + 40px)", transform: "scale(0.375)", marginLeft: "-3.8em", borderRadius: "2em", height: "763px"},
            {marginTop: "-15em", transform: "scale(0.275)", marginLeft: "-11em"},
            {marginTop: "-9.8em", transform: "scale(0.325)", marginLeft: "-15.75em"},
            {marginTop: "-17.15em", transform: "scale(0.24)", marginLeft: "-27.8em"}
        ];

        console.log(this.props.selectedDevices);

        this.setState({
            deviceIcons: [ deviceIcons[this.props.selectedDevices[0]], deviceIcons[this.props.selectedDevices[1]] ],
            dimensions: [   [deviceInfo[this.props.selectedDevices[0]][0], deviceInfo[this.props.selectedDevices[0]][1] ], 
                            [deviceInfo[this.props.selectedDevices[1]][0], deviceInfo[this.props.selectedDevices[1]][1] ]
                        ],
            deviceStyles: [styles[this.props.selectedDevices[0]], styles[this.props.selectedDevices[1]]]
        });
    }

    render(){
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

        let icons = this.state.deviceIcons == null ? [null, null] : [this.state.deviceIcons[0], this.state.deviceIcons[1]];
        let dimensions = this.state.dimensions == null ? [[0,0],[0,0]] : this.state.dimensions;
    
        return(
            <motion.main className="container" id="device-view"
                initial="in"
                animate="init"
                exit="out"
                variants={pageTransition}
            >
                <header>
                    <h1>Device View</h1>
                </header>
    
                <section className="body">
                    <section>
                        <div>
                            <iframe src={this.props.url} width={dimensions[0][0]} height={dimensions[0][1]} style={this.state.deviceStyles[0]}></iframe>
                            <img src={icons[0]}/>
                        </div>
                    </section>
                    <section>
                        <div>
                            <iframe src={this.props.url} width={dimensions[1][0]} height={dimensions[1][1]}  style={this.state.deviceStyles[1]}></iframe>
                            <img src={icons[1]}/>
                        </div>
                    </section>
                </section>
    
                <section className="footer">
                    <button className="primary-btn btn" onClick={()=>this.props.history.push("/device-select")}>Reselect Devices</button>
                </section>
            </motion.main>
        );
      }
}

export default View;