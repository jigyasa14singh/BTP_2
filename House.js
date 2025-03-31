import React from "react";
import "./House.css";

const House = ({ name, onClick }) => {
  return (
    <div className="house" onClick={onClick}>
      🏠 {name}
    </div>
  );
};

export default House;


