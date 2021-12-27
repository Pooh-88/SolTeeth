import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <nav id="nav-wrap">
          <ul id="nav" className="nav opaque">
            <li>
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#teeth">
                Teeth
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#feautures">
                Feautures
              </a>
            </li>

            {/* <li>
              <a className="smoothscroll" href="#portfolio">
                Rarity
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                More
              </a>
            </li> */}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
