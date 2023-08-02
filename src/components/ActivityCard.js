import { Card, Col, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";

const ActivityCard = (props) => {

  return(
    <>
    <Link to={`/activityshow/${props.activities.id}`} >
    <Card css={{ bg: "$black", w: 200, h: 250, display: "inline-flex"}} > 
      <Card.Header css={{ position: "absolute", zIndex: 1, bottom: -4, width: 200}}>

        <Col>
          <Text transform="uppercase" h4 color="white">{props.activities.category}</Text>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            WHAT: {props.activities.activity_name}
          </Text>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            WHEN: {props.activities.start_time}
          </Text>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            WHERE: {props.activities.location}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image    
        src={props.activities.activity_photo}
        width="100%"
        height={340}
        objectFit="cover"
        alt="Card image background"
      />
    </Card>
    </Link>
  </>
  
);
}

export default ActivityCard