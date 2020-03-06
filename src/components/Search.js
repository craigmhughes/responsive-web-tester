import React from 'react';
import {motion} from 'framer-motion';

import SearchIcon from '../assets/icons/search.svg';

class Search extends React.Component {
  constructor(props){
      super(props);

      this.urlInput = React.createRef();
  }
  
  render(){

    // Animation object decides styles for each animation state.
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
                <h1>Which site are you testing?</h1>
            </header>

            <section className="body">
              <div className="search-field" ref={this.search}>
                <img src={SearchIcon}/>

                <input type="search" placeholder="Enter your URL here" ref={this.urlInput}></input>              
              </div>
            </section>

            <section className="footer">
                    <button className="primary-btn btn" onClick={()=>{
                      let hasUrl = this.props.useUrl(this.urlInput.current.value) !== false;

                      if(hasUrl){
                        this.props.history.push("device-select");
                      }

                      }}>Continue</button>
                </section>
        </motion.main>
    );
  }
}

export default Search;
