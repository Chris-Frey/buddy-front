import { Card, Col, Text } from "@nextui-org/react";

const ActivityCard = ({activities}) => (

  <Card css={{ bg: "$black", w: 200, h: 250, display: "inline-flex"}}>
    <Card.Header css={{ position: "absolute", zIndex: 1, bottom: -4, width: 200}}>
      <Col>
        <Text h4 color="white">{activities.category}</Text>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          WHAT: {activities.activity}
        </Text>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          WHEN: {activities.start_time}
        </Text>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          WHERE: {activities.location}
        </Text>
      </Col>
    </Card.Header>
    <Card.Image    
      src={activities.activity_photo}
      width="100%"
      height={340}
      objectFit="cover"
      alt="Card image background"
    />
  </Card>

);
export default ActivityCard