import React from 'react';

import Device from './Device';

class View extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="resp-viewer" className={this.props.searched ? null : "hidden"}>
                <div className="container">
                    <section className="header">
                        <p>{this.props.viewUrl ? "Viewing" : "View a site"}</p>
                        <input className="url" type="search" placeholder="Enter a URL here..." defaultValue={this.props.viewUrl || ""}/>
                    </section>
                    <section className="body">
                        <Device width="300" height="600" frameSrc={this.props.viewUrl}/>
                    </section>
                </div>
            </div>
        );
    }
}

export default View;