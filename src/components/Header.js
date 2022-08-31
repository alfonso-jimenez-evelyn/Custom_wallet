import React from 'react';
import "./styles/App.css";
import footprint from "./utils/touch_id.png";

class Header extends React.Component{
  render() {
    return (
      <div className="Header-Div">
        <img className="Header-Image" src={footprint} />
        <h1 className="Header-Tittle">Custom Wallet</h1>
        <p className="Header-Text">
          Purpose of this project
          asdkasdksadnsadnasjdhnasjdasndkasjdsadasjdkasjdaslkdjsakldjaskldjasdjaslkf
          asdasjdjeoafnsa fkjaskfjkgjdskasjdj ajsdmiadasdasda dasddjjkoasjdkaj
          kjsajfdkfjaskfjpasfpasf
          jjkasfkaskfjfskafjaskfjkasfjsakfjaskfksajfsafjpfsajfaksfjsajffsafsafaf
        </p>
      </div>
    );
  }
}

export default Header;
