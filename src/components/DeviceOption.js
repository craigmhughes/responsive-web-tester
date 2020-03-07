import React from 'react';

class DeviceOption extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <li onClick={()=>{ this.props.setActiveDevice(this.props.option, this.props.index) }} className={this.props.activeDevice === this.props.index ? "active" : ""}>
                <img src={this.props.icon}/>
                <h3>{this.props.title}</h3>
                <p>({this.props.dimensions} px)</p>
            </li>
        );
    }
}

export default DeviceOption;