import { Card, Col, Text } from "@nextui-org/react";

const PictureCard = ({currentActivity}) => (

  <Card css={{w: 500, h: 340}}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5,  }}>
    </Card.Header>
    <Card.Image
      src={currentActivity?.activity_photo}
      objectFit="cover"
      width="100%"
      height={340}
      alt="Activity Image"
    />
  </Card>
);

export default PictureCard
