import React, { Component } from "react";
import Fade from "react-reveal";
//import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';

class Home extends Component {
  render() {
    return (
      <section id="home">
        <Fade duration={1000} distance="40px">
          <div className="home-title">
            <img src="images/tooth.png"></img>
            <img src="images/title.png"></img>
            <img src="images/tooth.png"></img>
          </div>
          <div className="row home-desc">
            <h2>Anatomically accurate, cool, original teeth that left their owners who did not care  of them in order to start a new and happy life</h2>
          </div>
          {/* <AutoRotatingCarousel>

          </AutoRotatingCarousel> */}
          <div className="row home-mint">
            <button className="mint">Mint</button>
            <h3>for 0.1 sol</h3>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Home;
