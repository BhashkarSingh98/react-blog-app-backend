import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Burger from "./hamburger/Burger";

const Navlink = () => {
  const [show, setshow] = useState(true);
  return (
    <><div className="toogle">
    
    {show?<div className="navbar">
      
        <div className="navbar1">
          <ul>
            <li id="l1">
              <NavLink className="a" id="a1" to="/">
                Home
              </NavLink>
            </li>
            <li id="l2">
              <NavLink className="a" id="a2" to="/tourism">
                Tourism
              </NavLink>
            </li>
            <li id="l3">
              <NavLink className="a" id="a3" to="/technology">
                Technology
              </NavLink>
            </li>
            <li id="l4">
              <NavLink className="a" id="a4" to="/fitness">
                Fitness
              </NavLink>
            </li>
            <li id="l5">
              <NavLink className="a" id="a5" to="/bollywood">
                Bollywood
              </NavLink>
            </li>
            <li id="l6">
              <NavLink className="a" id="a6" to="/food">
                Food
              </NavLink>
            </li>
          </ul>
        </div>
      <hr />
    </div>:null
      }
      <div className="togle" onClick={()=>setshow(!show)}>
<span className="toglebutton">></span>
      <Burger />
      </div>
      </div>
      </>
  );
};

export default Navlink;
