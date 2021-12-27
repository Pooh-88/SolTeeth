import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {

    return (
      <section id="teeth">
        <Fade duration={1000}>
          <div className="row center">
            <h1>Meet Teeth</h1>
          </div>
          <div className="row v-center line-3-height">
            <img src="images/tooth-li-1.png"/>
            <span className="tooth-li-color1">Common&nbsp;</span>
            <span>tooth escaped from the most ordinary person</span>
          </div>
          <div className="row v-center line-3-height">
            <img src="images/tooth-li-2.png"/>
            <span className="tooth-li-color2">Uncommon&nbsp;</span>
            <span>tooth escaped from the mouth of a dollar millionaire</span>
          </div>
          <div className="row v-center line-3-height">
            <img src="images/tooth-li-3.png"/>
            <span className="tooth-li-color3">Rare&nbsp;</span>
            <span>tooth escaped from the mouth of a solana millionaire</span>
          </div>
          <div className="row v-center line-3-height">
            <img src="images/tooth-li-4.png"/>
            <span className="tooth-li-color4">Epic&nbsp;</span>
            <span>tooth still alive while its owner is already dead</span>
          </div>
          <div className="row v-center line-3-height">
            <img src="images/tooth-li-5.png"/>
            <span className="tooth-li-color5">Legendary&nbsp;<span>Tooth. The tooth of Ctulhu, which will guard the health of your teeth</span></span>            
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
