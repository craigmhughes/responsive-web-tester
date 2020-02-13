import React from 'react';


class Device extends React.Component {
    constructor(props){
        super(props);
    }

    // TODO - Add SVG graphics for device borders.
    render(){
        return(
            <div className="device-preview">
                <iframe src={this.props.frameSrc} width={this.props.width} height={this.props.height}
                    style={{
                        marginLeft: -(this.props.width / 2 - 6),
                        marginTop: -(this.props.height / 2 - 50),
                        transform: `scale(${this.props.scale})`
                    }}></iframe>
            </div>
        );
    }
}

export default Device;