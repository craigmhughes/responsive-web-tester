import React from 'react';


class Device extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="device-preview">
                <iframe src={this.props.frameSrc} width={this.props.width} height={this.props.height}></iframe>
            </div>
        );
    }
}

export default Device;