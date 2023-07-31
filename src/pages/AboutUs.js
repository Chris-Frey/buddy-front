import React from "react";
import { Image } from "@nextui-org/react";
import styles from "../styles/AboutUs.css";
import {Link} from "react-router-dom"

const AboutUs = () => {
  return (
    <>
      <div className="title">
        <h1>Meet The Team!</h1>
      </div>
      <div className="images">
        <Image
          className="profileimg"
          src="https://media.licdn.com/dms/image/D5635AQHHi--k84JUSg/profile-framedphoto-shrink_800_800/0/1684969665329?e=1690898400&v=beta&t=inVnCHbM-jPNF_tcX8vrkTQs7x5Yh8WYWqGwWXDkVP4"
          alt="Default Image"
          // objectFit="cover"
        />

        <Image
          className="profileimg"
          src="https://media.licdn.com/dms/image/C5603AQGPJpuCt00ZfA/profile-displayphoto-shrink_800_800/0/1643264241799?e=1695859200&v=beta&t=qW17TWhrSqxec_5lGllLZUBpsv99I0z8PWieOLwztNI"
          alt="Default Image"
          // objectFit="cover"
        />
        <Image
          className="profileimg"
          src="https://media.licdn.com/dms/image/D5603AQF7In7j3UnARA/profile-displayphoto-shrink_800_800/0/1684365171540?e=1695859200&v=beta&t=IEEWXmr1D8Kz8ymGfI1KW03Vfw8zDKMM7iYzNhLd0As"
          alt="Default Image"
          // objectFit="cover"
        />
      </div>
      <div className="aboutusnames">
        <div className="jesus_info_links">
        <h2>Jesus Camacho</h2>
        <a href="https://www.linkedin.com/in/jesusacamacho" target="_blank">
          <img className="icons" src="/linkedin.png"/>
        </a>
        <a href="https://www.github.com/AJCodes1" target="_blank">
          <img className="icons" src="/github.png"/>
        </a> 
        <a href="mailto:etsncamacho@gmail.com" target="_blank">
          <img className="icons" src="/email1.png"/>
        </a>
        </div>
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
        <div className="padge_info_links">
        <h2>Padge Mattaliano</h2>
        <a href="https://www.linkedin.com/in/padge-mattaliano/" target="_blank">
          <img className="icons_padge"src="/linkedin.png"/>
        </a>
        <a href="https://www.github.com/PadgeM" target="_blank">
          <img className="icons_padge" src="/github.png"/>
        </a> 
        <a href="mailto:padge.mattaliano@gmail.com" target="_blank">
          <img className="icons_padge" src="/email1.png"/>
        </a>
        </div>
      </div>
      <div className="aboutustext">
        <p className="paragraphs">
        Jesus is a passionate software developer with a strong drive for building innovative solutions and tackling intricate problems. Prior to their coding pursuits, they honed their skills as an Electronics Technician in the Navy, troubleshooting and maintaining complex electronic systems. Their dream is to find an exceptional company where they can contribute to impactful projects within a forward-thinking team that values growth and innovation. With a firm belief in the power of teamwork, they strive to foster a supportive environment that encourages open communication and collaboration, pushing the boundaries of software development to create something truly remarkable.
        </p>
        <p className="paragraphs">
        Since he was a child Chris has been playing around with computers, and seeing what he could break. He took a detour through the military, and then earned his Landscape Architecture license, where he honed his leadership and critical thinking skills. He's now knee deep in JavaScript, React, Ruby, and other technologies that affect how we use the world around us.  Chris tries to be an advocate for those who need an extra voice.  When he's not living the code life, he spends time outdoors hiking, camping, and sometimes learning to salsa. He does most of it with his 13 year old dog, Kaylee.
        </p>
        <p className="paragraphs">
        Padge is a versatile Full-Stack Web Developer and Retired Infantry Squad Leader, boasting a successful track record in the realms of entertainment, technology, and military service. With honed leadership skills cultivated in high-pressure environments, Padge exhibits adaptability and a creative acumen acquired through focused acting training. Proficient in front-end and back-end development, they excel in analyzing intricate problems and delivering transformative solutions. Eager to leverage this exceptional combination of skills and their passion for technology, Padge is committed to pursuing a fulfilling career and embracing collaborative opportunities to consistently deliver exceptional results.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
