import React from 'react'
import { Container, Image } from '@nextui-org/react';
import styles from "../styles/BuddyProfile.css";
import { Card, Col, Text } from "@nextui-org/react";
import { useParams } from 'react-router-dom';
import AddActivityModal from '../components/AddActivityModal/AddActivityModal'

const BuddyProfile = ({currentUser}) => {
  console.log(currentUser)
  // const { id } = useParams()
  // let currentUsers = currentUser?.id
  // let currentUsers = currentUser?.find((user) => user.id === +id)
 
  return (
    <>  
    <h1 className='your_profile'>
      Your Profile
    </h1>
    
   
    <Container className='pic_fields'>

      <Image
        className="profile-image"
        width={320}
        height={180}  
        src={currentUser.photo}
        alt="User Image"
        objectFit="cover"
        
        // src="https://media.licdn.com/dms/image/C5603AQGPJpuCt00ZfA/profile-displayphoto-shrink_800_800/0/1643264241799?e=1695859200&v=beta&t=qW17TWhrSqxec_5lGllLZUBpsv99I0z8PWieOLwztNI"  
      />

        <Card className="profile-card" css={{ w: 500, h: "30vh", bg: "Black"}}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5}}>
      <Col>

        <Text size={15} weight="bold" transform="uppercase"color="#FFCD4E" >NAME</Text>

        <Text size={13} h3 color="White" >
        {currentUser.name}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="#FFCD4E" > USER NAME</Text>

        <Text size={13} h3 color="White">
        {currentUser.username}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="#FFCD4E">Gender Identity</Text>

        <Text size={13} h3 color="White"> {currentUser.gender_identity}</Text>        

        <Text size={15} weight="bold" transform="uppercase" color="#FFCD4E">your creator id</Text>

        <Text size={13} h3 color="White"> {currentUser.id}</Text>        

      </Col>
      </Card.Header>
      </Card> 
       </Container>

      <div className='modal'>
      <AddActivityModal />
      </div>
    </>
  );
}
export default BuddyProfile
