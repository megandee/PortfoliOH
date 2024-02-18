import React from 'react'
import "./topbar.scss"
import { Mail, Phone, LinkedIn, GitHub } from "@material-ui/icons"


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
      <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">
              MDeRisi
            </a>
            <div className="itemContainer">
              <LinkedIn className="icon" />
              <a href="https://www.linkedin.com/in/megan-derisi" 
              target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            </div>
            <div className="itemContainer">
              <GitHub className="icon" />
              <a href="https://github.com/megandee" 
              target="_blank" rel="noopener noreferrer">
              Github
            </a>
            </div>
            <div className="itemContainer">
              <Mail className="icon" />
              <span>meganderisi@gmail.com</span>
            </div>
            <div className="itemContainer">
              <Phone className="icon" />
              <span>316-558-0973</span>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  