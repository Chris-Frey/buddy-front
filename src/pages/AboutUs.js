import React from "react";
import { Image } from "@nextui-org/react";
import styles from "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div>
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
        <h2>Jesus</h2>
        <h2>Chris</h2>
        <h2>Padge</h2>
      </div>
      <div className="aboutustext">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis
          eros molestie, placerat orci porta, lacinia metus. Curabitur tincidunt
          pulvinar finibus. Etiam at molestie dui. Aenean fringilla, libero
          vitae feugiat posuere, urna massa venenatis massa, in pellentesque sem
          mauris maximus velit. Donec lacus nibh, viverra a enim vel, blandit
          porta magna. Aenean nec purus sagittis, cursus ante ac, ornare nisl.
          Duis et ligula vitae metus ornare semper ac ut quam. Nunc pretium
          sollicitudin orci nec accumsan. Vestibulum consequat, ex ac
          ullamcorper porttitor, nisl tellus dapibus orci, eget laoreet erat
          ligula sit amet augue. Suspendisse maximus in mauris vel tempus. Nunc
          dignissim massa at metus tempor, eget semper est tincidunt. Curabitur
          interdum eros ac ex condimentum dictum. Donec a nisi commodo,
          facilisis urna at, malesuada arcu. Nullam tincidunt faucibus sem eget
          tempor. Etiam non libero facilisis, ornare augue quis, maximus ligula.
          Pellentesque in iaculis purus, et sollicitudin eros.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis
          eros molestie, placerat orci porta, lacinia metus. Curabitur tincidunt
          pulvinar finibus. Etiam at molestie dui. Aenean fringilla, libero
          vitae feugiat posuere, urna massa venenatis massa, in pellentesque sem
          mauris maximus velit. Donec lacus nibh, viverra a enim vel, blandit
          porta magna. Aenean nec purus sagittis, cursus ante ac, ornare nisl.
          Duis et ligula vitae metus ornare semper ac ut quam. Nunc pretium
          sollicitudin orci nec accumsan. Vestibulum consequat, ex ac
          ullamcorper porttitor, nisl tellus dapibus orci, eget laoreet erat
          ligula sit amet augue. Suspendisse maximus in mauris vel tempus. Nunc
          dignissim massa at metus tempor, eget semper est tincidunt. Curabitur
          interdum eros ac ex condimentum dictum. Donec a nisi commodo,
          facilisis urna at, malesuada arcu. Nullam tincidunt faucibus sem eget
          tempor. Etiam non libero facilisis, ornare augue quis, maximus ligula.
          Pellentesque in iaculis purus, et sollicitudin eros.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis
          eros molestie, placerat orci porta, lacinia metus. Curabitur tincidunt
          pulvinar finibus. Etiam at molestie dui. Aenean fringilla, libero
          vitae feugiat posuere, urna massa venenatis massa, in pellentesque sem
          mauris maximus velit. Donec lacus nibh, viverra a enim vel, blandit
          porta magna. Aenean nec purus sagittis, cursus ante ac, ornare nisl.
          Duis et ligula vitae metus ornare semper ac ut quam. Nunc pretium
          sollicitudin orci nec accumsan. Vestibulum consequat, ex ac
          ullamcorper porttitor, nisl tellus dapibus orci, eget laoreet erat
          ligula sit amet augue. Suspendisse maximus in mauris vel tempus. Nunc
          dignissim massa at metus tempor, eget semper est tincidunt. Curabitur
          interdum eros ac ex condimentum dictum. Donec a nisi commodo,
          facilisis urna at, malesuada arcu. Nullam tincidunt faucibus sem eget
          tempor. Etiam non libero facilisis, ornare augue quis, maximus ligula.
          Pellentesque in iaculis purus, et sollicitudin eros.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
