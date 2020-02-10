import React from 'react';

import SearchIcon from '../assets/icons/search.svg';

class Home extends React.Component {
    constructor(props){
        super(props);

        this.urlInput = React.createRef();
    }

    render(){
        return(
            <div className="container" id="home">
                <h1 className="title">testmy<span>.page</span></h1>
                <p className="subtitle">Test the responsiveness of your site</p>

                <div className="search-field">
                    <input type="search" placeholder="enter your url here..." ref={this.urlInput}></input>
                    <button onClick={()=>{this.props.setUrl(this.urlInput.current.value)}}><img src={SearchIcon}/></button>
                </div>

                <p className="credit">
                    a sample project by
                    <br/>
                    <a href="https://github.com/craigmhughes">Craig Hughes</a>
                </p>
            </div>
        );
    }
}

export default Home;