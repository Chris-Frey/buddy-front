import React from "react";
import { Image } from "@nextui-org/react";
import styles from "../styles/AboutUs.css";
import {Link} from "react-router-dom"

const AboutUs = () => {
  return (
    <>
      <div className="title">
        <h1 className="title">Whim Team</h1>
      </div>
      <image className='kaylee' src="src/assets/PXL_20230325_185527781.jpg"
        alt="Default Image"
      />

      <div className="aboutusnames">

        <div className="chris_info_links">
        <h2>Chris Frey</h2>
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

      </div>
      <div className="aboutustext">

        <p className="paragraphs">
        Since he was a child Chris has been playing around with computers, and seeing what he could break. He took a detour through the military, and then earned his Landscape Architecture license, where he honed his leadership and critical thinking skills. He's now knee deep in JavaScript, React, Ruby, and other technologies that affect how we use the world around us.  Chris tries to be an advocate for those who need an extra voice.  When he's not living the code life, he spends time outdoors hiking, camping, and sometimes learning to salsa. He does most of it with his 13 year old dog, Kaylee.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
