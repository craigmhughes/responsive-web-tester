import React from 'react';

import SearchIcon from '../assets/icons/search.svg';

class Home extends React.Component {
    constructor(props){
        super(props);

        this.urlInput = React.createRef();
        this.search = React.createRef();
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

    render(){
        return(
            <div className="container" id="home">

                <div className="search-field" ref={this.search}>
                    <input type="search" placeholder="enter your url here..." ref={this.urlInput} 
                        onFocus={()=>{this.search.current.className = "search-field active"}} 
                        onBlur={()=>{this.search.current.className = "search-field"}}
                        onKeyDown={(e)=>{this.sendUrl(e)}}></input>

                    <button onClick={()=>{this.sendUrl("submit")}}><img src={SearchIcon}/></button>
                </div>

            </div>
        );
    }
}

export default Home;