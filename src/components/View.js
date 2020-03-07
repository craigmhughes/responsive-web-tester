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
            deviceIcons: null
        };
    }

    componentDidMount(){
        if(this.props.selectedDevices == null){
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

        console.log(this.props.selectedDevices);

        this.setState({
            deviceIcons: [ deviceIcons[this.props.selectedDevices[0]], deviceIcons[this.props.selectedDevices[1]] ]
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
                        <img src={icons[0]}/>
                    </section>
                    <section>
                        <img src={icons[1]}/>
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