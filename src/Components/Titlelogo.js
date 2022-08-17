import React from "react";
import "./Titlelogo.css";
import one from "./Images/one.png";
import vector from "./Images/Vector.png";

export default function Titlelogo() {
  return (
    <div>
      <div className="title">
        <img className="one" src={one} alt="" />
        <img className="vector" src={vector} alt="" />
      </div>
      <div className="text">Trending Assets</div>
    </div>
  );
}
