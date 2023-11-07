import React from "react";
import styles from "../styles/AboutUs.css";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const AboutUs = () => {
  return (
    <>
      <div className="aboutBody">
        {/* <h1 className="title">Promptu</h1> */}
        <p className='welcomeMessage'>This is Promptu, the social app that actually let's you be social.  In Promptu, you can post an activity you want to do, fill out the specifics, and people can sign up to come with you.  Promptu is a same-day app. You only need to plan a few hours in advance.  <b><br/>At the moment, the app is in a "showoff" state, so logging in is not necessary.  This will change as the app gets closer to launch.</b></p>
        <p className='welcomeMessage'><b>Since no log-in is required, signing up for activities, and profile information will not be functional. (they are there, I just disbled the code since you're not technically a user)</b></p>
        {/* <h4>Get in touch!</h4> */}

      {/* <img className='kaylee' src={"./assets/kaylee.jpg"}
        alt={"Kaylee"}
      /> */}

        <div className="contact-links">
          <a href="https://www.linkedin.com/in/chris-l-frey/" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2xl" style={{color: "#000000",}} />
          </a>
          <a href="https://www.github.com/Chris-Frey" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-github" size="2xl" style={{color: "#000000",}} />
          </a>
          <a href="mailto:chris.frey@hey.com" target="_blank">
            <FontAwesomeIcon icon="fa-solid fa-envelope" size="2xl" style={{color: "#000000",}} />
          </a>
        </div>

      <div className="aboutustext">
      </div>
      </div>
    </>
  );
};

export default AboutUs;
