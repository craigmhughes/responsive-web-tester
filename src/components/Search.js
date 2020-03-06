import React from 'react';
import {motion} from 'framer-motion';


class App extends React.Component {
  constructor(props){
      super(props);

      this.state = {
        url: null,
        searched: false,
      };

      this.setUrl = this.setUrl.bind(this);
  }

  setUrl(url){
    this.setState({
      url: url,
      searched: true
    });
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
                <h1>Which site are you testing?</h1>
            </header>
        </motion.main>
    );
  }
}

export default App;
