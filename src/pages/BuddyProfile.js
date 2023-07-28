import React from 'react'
import { Image } from '@nextui-org/react';
import styles from "../styles/BuddyProfile.css";
import { Card, Col, Text } from "@nextui-org/react";
import { useParams, Link } from "react-router-dom"
import AddActivityModal from '../components/AddActivityModal/AddActivityModal'

const BuddyProfile = ({currentUser}) => {
  const { id } = useParams()
  let currentUsers = currentUser.find((user) => user.id === +id)

 
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
      src={currentUsers.photo}
      alt="Default Image"
      objectFit="cover"
    />
    </div> 
        <Card class="profile-card" css={{ w: 500, h: "70vh" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={24} weight="bold" transform="uppercase" color="black">{currentUsers.category}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="black">User NAME</Text>

        <Text size={13} h3 color="black">
        {currentUsers.name}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="black">Age</Text>

        <Text size={13} h3 color="black">{currentUsers.age}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="black">Gender Identity</Text>

        <Text size={13} h3 color="black"> {currentUsers.gender_identity}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="black">Bio</Text>

        <Text size={13} h3 color="black"> {currentUsers.bio}</Text>
        
      </Col>
      </Card.Header>
      </Card>
      <AddActivityModal />
    </>
  );
}
export default BuddyProfile