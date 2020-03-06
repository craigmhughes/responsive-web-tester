import React from 'react';
import {motion} from 'framer-motion';

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

    render(){

        // Animation object decides styles for each animation state.
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

}

export default Home;