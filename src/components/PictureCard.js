import { Card, Col, Text } from "@nextui-org/react";

const PictureCard = () => (

  <Card css={{w: 500, h: 340}}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5,  }}>
    </Card.Header>
    <Card.Image
      src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2720&q=80"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Activity Image"
    />
  </Card>
);

export default PictureCard
