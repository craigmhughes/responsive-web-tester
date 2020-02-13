import React from 'react';

import Device from './Device';
import SmartphoneIcon from '../assets/icons/smartphone.svg';
import TabletIcon from '../assets/icons/tablet.svg';
import DesktopIcon from '../assets/icons/monitor.svg';
import SearchIcon from '../assets/icons/search.svg';

class View extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            deviceHeight: 823,
            deviceWidth: 411,
            toggleSearch: false
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

    setDeviceSize(w,h,s){
        this.setState({
            deviceWidth: w,
            deviceHeight: h,
            deviceScale: s
        });
    }

    hideSearch(e){
        if(e.target !== this.urlInput.current && this.state.toggleSearch){
            this.setState({
                toggleSearch: false
            });
        }
    }

    render(){
        return(
            <div id="resp-viewer" className={this.props.searched ? null : "hidden"} onClick={(e)=>{this.hideSearch(e)}}>
                <div className="container" onClick={(e)=>{this.hideSearch(e)}}>
                    <input ref={this.urlInput} className={this.state.toggleSearch ? "url active" : "url"} type="search" placeholder="enter an address here..." defaultValue={this.props.viewUrl || ""}
                            onKeyDown={(e)=>{this.sendUrl(e)}}/>

                        <img src={SearchIcon} id="search-button" onClick={()=>{this.setState({toggleSearch: !this.state.toggleSearch})}}/>

                        <div className="device-select">
                            <ul>
                                <li onClick={()=>{this.setDeviceSize(375,667,0.8)}}><img src={SmartphoneIcon}/><p>Mobile<span>375 x 667</span></p></li>
                                <li onClick={()=>{this.setDeviceSize(411,823,0.75)}}><img src={SmartphoneIcon}/><p>Large Mobile<span>411 x 823</span></p></li>
                                <li onClick={()=>{this.setDeviceSize(1024,768,0.75)}}><img src={TabletIcon}/><p>Tablet<span>1024 x 768</span></p></li>
                                <li onClick={()=>{this.setDeviceSize(1280,800,0.7)}}><img src={SmartphoneIcon}/><p>Small Laptop<span>1280 x 800</span></p></li>
                                <li onClick={()=>{this.setDeviceSize(1680,1050,0.6)}}><img src={DesktopIcon}/><p>Desktop<span>1680 x 1050</span></p></li>
                            </ul>
                        </div>

                        <Device width={this.state.deviceWidth} height={this.state.deviceHeight} scale={this.state.deviceScale} frameSrc={this.props.viewUrl}/>
                </div>
            </div>
        );
    }
}

export default View;