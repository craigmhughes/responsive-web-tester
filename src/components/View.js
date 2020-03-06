import React from 'react';
import {motion} from 'framer-motion';


class View extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const pageTransition = {
          in: {
            opacity: 1,
            x: "100%",
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
            <motion.main className="container" id="search"
                initial="in"
                animate="init"
                exit="out"
                variants={pageTransition}
            >
                <header>
                    <h1>Device View</h1>
                </header>
    
                <section className="body">
    
                </section>
    
                <section className="footer">
                    <button className="primary-btn btn">Reselect Devices</button>
                </section>
            </motion.main>
        );
      }
}

export default View;