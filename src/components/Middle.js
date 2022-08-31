import React from "react";
import "./styles/App.css";
import people from "./utils/people.png";
import group from "./utils/group.png";
import visible from "./utils/visible.png";
import vector from "./utils/vector.png";

class Middle extends React.Component {
  render() {
    return (
      <div className="Middle-Div">
        <hr className="Middle-Line" />
        <h2 className="Middle-Title">Discover benefits of web3</h2>
        
        <img className="Middle-Image" src={people} />
        <img className="Middle-Logo-1" src={group} />
        <img className="Middle-Logo-2" src={visible} />
        <img className="Middle-Logo-3" src={vector} />

        <p className="Middle-Text-Logo-1">
          User could be able to 
          transfer and receive 
          money from other 
          users around the 
          world with low taxes.
        </p>
        <p className="Middle-Text-Logo-2">
          User could be able to 
          transfer and receive 
          money from other 
          users around the 
          world with low taxes.
        </p>
        <p className="Middle-Text-Logo-3">
          User could be able to 
          transfer and receive 
          money from other 
          users around the 
          world with low taxes.
        </p>
      </div>
    );
  }
}

export default Middle;
