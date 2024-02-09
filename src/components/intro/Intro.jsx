import React from "react";
import "./intro.scss";
import profilePhoto from "../../assets/profilePhoto.jpg";
export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={profilePhoto} alt="profile" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Hey there</h1>
          <h2>I'm Megan, lets work together!</h2>
          <h4>
            I am a  Full Stack developer with a love for the art of problem-solving. My tech journey has been a thrilling adventure and one that has reiterated the importance of collaboration. I thrive working with diverse teams, turning creative ideas into practical solutions. Please feel free to reach out. Let's connect via LinkedIn or contact me directly at MeganDeRisi@gmail.com.
            </h4>
            
        </div>
      </div>
    </div>
  );
}
