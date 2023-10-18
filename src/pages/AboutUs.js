import React from "react";
import styles from "../styles/AboutUs.css";
import {Link} from "react-router-dom"

const AboutUs = () => {
  return (
    <>
      <div className="aboutBody">
        {/* <h1 className="title">Promptu</h1> */}
        <p className='welcomeMessage'>Welcome to Promptu, the social app that actually let's you be social.  In Promptu, you can post an activity you want to do, fill out the specifics, and people can sign up to come with you.  Promptu is a same-day app. You only need to plan a few hours in advance.  <b><br/>At the moment, the app is in a "showoff" state, so logging in is not necessary.  This will change as the app gets closer to launch.</b></p>
        {/* <h4>Get in touch!</h4> */}

      {/* <img className='kaylee' src="./assets/kaylee.jpg"
        alt="Kaylee"
      /> */}

        <div className="chris_info_links">
          <a href="https://www.linkedin.com/in/chris-l-frey/" target="_blank">
            <img className="icons" src="/linkedin.png"/>
          </a>
          <a href="https://www.github.com/Chris-Frey" target="_blank">
            <img className="icons" src="/github.png"/>
          </a>
          <a href="mailto:chris.frey@hey.com" target="_blank">
            <img className="icons" src="/email1.png"/>
          </a>
        </div>

      <div className="aboutustext">

        {/* <p className="paragraphs">
        Since he was a child Chris has been playing around with computers, and seeing what he could break. He took a detour through the military, and then earned his Landscape Architecture license, where he honed his leadership and critical thinking skills. He's now knee deep in JavaScript, React, Ruby, and other technologies that affect how we use the world around us.  Chris tries to be an advocate for those who need an extra voice.  When he's not living the code life, he spends time outdoors hiking, camping, and sometimes learning to salsa. He does most of it with his 13 year old dog, Kaylee.
        </p> */}
      </div>
      </div>
    </>
  );
};

export default AboutUs;
