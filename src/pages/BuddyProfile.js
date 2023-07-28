import React from 'react'
import { Image } from '@nextui-org/react';
import styles from "../styles/BuddyProfile.css";
import { Card, Col, Text } from "@nextui-org/react";
import { useParams } from "react-router-dom"
import AddActivityModal from '../components/AddActivityModal/AddActivityModal'

const BuddyProfile = ({currentUser}) => {
  console.log(currentUser.id);
 


 
  return (
    <>  
    <h1>
      Your Profile
    </h1>
    
    <div>
    <Image
      class="profile-image"
      width={320}
      height={180}  
      src={currentUser.photo}
      alt="Default Image"
      objectFit="cover"
    />
    </div> 
        <Card class="profile-card" css={{ w: 500, h: "70vh" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={24} weight="bold" transform="uppercase" color="black">{currentUser.category}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="black">User NAME</Text>

        <Text size={13} h3 color="black">
        {currentUser.name}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="black">Age</Text>

        <Text size={13} h3 color="black">{currentUser.age}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="black">Gender Identity</Text>

        <Text size={13} h3 color="black"> {currentUser.gender_identity}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="black">Bio</Text>

        <Text size={13} h3 color="black"> {currentUser.bio}</Text>
        
      </Col>
      </Card.Header>
      </Card>
      <AddActivityModal />
    </>
  );
}
export default BuddyProfile