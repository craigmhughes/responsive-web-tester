import React from 'react';
import {motion} from 'framer-motion';

import SearchIcon from '../assets/icons/search.svg';

// SVG Art
import SplashArt from '../assets/svg-art/Splash Vector.svg';
import SplashUnderlay from '../assets/svg-art/Splash Vector (Underlay).svg';

class Home extends React.Component {
    constructor(props){
        super(props);

        this.urlInput = React.createRef();
        this.search = React.createRef();
        this.artSection = React.createRef();
    }

    componentDidMount(){
        let artElements = this.artSection.current.children;

        // setTimeout(()=>{
        //     artElements[0].style.width = "120%";
        //     artElements[0].style.marginLeft = "-10%";
        //     artElements[0].style.marginTop = "-5%";
        //     artElements[0].style.opacity = 1;
        // }, 100);

        // setTimeout(()=>{
        //     artElements[1].style.width = "90%";
        //     artElements[1].style.marginLeft = "5%";
        //     artElements[1].style.marginTop = "0%";
        //     artElements[1].style.opacity = 1;
        // }, 200);
        
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

        const pageTransition = {
            in: {
                opacity: 1,
                x: "-100%",
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

        return(
            <motion.main className="container" id="home"
                initial="in"
                animate="init"
                exit="out"
                variants={pageTransition}
            >
                <header>
                    <h1>Responsive <br/>Website Tester</h1>
                </header>
                
                <section className="body">
                    <section id="home-art" ref={this.artSection}>
                        <img src={SplashUnderlay} className="art"/>
                        <img src={SplashArt} className="art"/>
                    </section>
                </section>
                <section className="footer">
                    <button className="primary-btn btn" onClick={()=>{this.props.history.push("search")}}>Get Started</button>
                    <button className="secondary-btn btn credit">Project by <span>Craig Hughes</span></button>
                </section>
            </motion.main>
        );
    }

    // <div className="search-field" ref={this.search}>
    //     <input type="search" placeholder="enter your url here..." ref={this.urlInput} 
    //         onFocus={()=>{this.search.current.className = "search-field active"}} 
    //         onBlur={()=>{this.search.current.className = "search-field"}}
    //         onKeyDown={(e)=>{this.sendUrl(e)}}></input>

    //     <button onClick={()=>{this.sendUrl("submit")}}><img src={SearchIcon}/></button>
    // </div>

}

export default Home;