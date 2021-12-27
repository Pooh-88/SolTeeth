import React, { Component } from "react";
import {Slide, Fade} from "react-reveal";

class Feautures extends Component {
  
  render() {
    
    return (
      <section id="feautures">
        <Fade left duration={1300}>
          <div className="row center line-3-height">
            <h1>Feautures</h1>
          </div>
        </Fade>

        <Slide bottom duration={1300}>
          <div className="row center line-1-height">
            <p>Every tooth will be generated randomly at the moment of minting.</p> 
            <p>And we’ve prepared a tidbit for you</p>
          </div>
          <div className="row center line-1-height">
            <label>We’ve released 3 characters that have slight chance of being created. But who know! Maybe you’ll become the proud owner of one.</label> 
          </div>
          <div className="row center line-1-height">
            <p>Each of them will be the most powerful card in our upcoming game.</p>
          </div>
          <div className="row center line-3-height">            
            <img src="images/feautures.jpg"></img>
          </div>
        </Slide>

        <Fade left duration={1300}>
          <div className="row center line-3-height">
            <h2>ALSO</h2>
          </div>
        </Fade>

        <Slide bottom duration={1300}>
          <div className="row center line-3-height">            
            <img src="images/chain-l.png"></img>
            <p>As soon as 100% of teeth reach their owners, each SolT  holder will recieve royalty via airdrop in Solana tokens. The royalty amount is 50% commisions from sales on secondary markets will be given automaticaly every weekend.</p>
            <img src="images/chain-r.gif"></img>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Feautures;
