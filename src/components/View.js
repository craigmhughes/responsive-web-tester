import React from 'react';

import Device from './Device';
import SmartphoneIcon from '../assets/icons/smartphone.svg';
import TabletIcon from '../assets/icons/tablet.svg';
import DesktopIcon from '../assets/icons/monitor.svg';

class View extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            deviceHeight: 823,
            deviceWidth: 411
        }

        this.urlInput = React.createRef();
    }

    sendUrl(e){
        if(e === "submit" || e.key === 'Enter'){
            let urlMatch = this.urlInput.current.value.match(new RegExp('(https?:\/\/)'));
            let urlMatchTwo = this.urlInput.current.value.match(new RegExp('(\.)'));

            if(urlMatch || urlMatchTwo){
                let urlToSend = this.urlInput.current.value;

                if(urlMatchTwo && !urlMatch){
                    urlToSend = "https://" + urlToSend;
                }
                this.props.setUrl(urlToSend);
            }
        }
    }

    setDeviceSize(w,h){
        this.setState({
            deviceWidth: w,
            deviceHeight: h
        });
    }

    render(){
        return(
            <div id="resp-viewer" className={this.props.searched ? null : "hidden"}>
                <div className="container">
                    <section className="header">
                        <p>{this.props.viewUrl ? "Viewing" : "View a site"}</p>
                        <input ref={this.urlInput} className="url" type="search" placeholder="Enter a URL here..." defaultValue={this.props.viewUrl || ""}
                            onKeyDown={(e)=>{this.sendUrl(e)}}/>

                        <div className="device-select">
                            <ul>
                                <li onClick={()=>{this.setDeviceSize(375,667)}}><img src={SmartphoneIcon}/><p>Mobile<span>375 x 667</span></p></li>
                                <li onClick={()=>{this.setDeviceSize(411,823)}}><img src={SmartphoneIcon}/><p>Large Mobile<span>411 x 823</span></p></li>
                                <li onClick={()=>{this.setDeviceSize(1024,768)}}><img src={TabletIcon}/><p>Tablet<span>1024 x 768</span></p></li>
                                <li onClick={()=>{this.setDeviceSize(1280,800)}}><img src={SmartphoneIcon}/><p>Small Laptop<span>1280 x 800</span></p></li>
                                <li onClick={()=>{this.setDeviceSize(1680,1050)}}><img src={DesktopIcon}/><p>Desktop<span>1680 x 1050</span></p></li>
                            </ul>
                        </div>
                    </section>
                    <section className="body">
                        <Device width={this.state.deviceWidth} height={this.state.deviceHeight} frameSrc={this.props.viewUrl}/>
                    </section>
                </div>
            </div>
        );
    }
}

export default View;