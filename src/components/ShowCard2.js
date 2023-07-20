import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const Card5 = () => (
  <Card css={{ w: "100%", h: "75vh" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={24} weight="bold" transform="uppercase" color="white">
          Soccer
          <Text size={15} weight="bold" transform="uppercase" color="yellow">          
              Event
          </Text>
        </Text>
        <Text size={13} h3 color="white">
        2v2 Pickup Game
        </Text>
        <Text size={15} weight="bold" transform="uppercase" color="yellow">          
              Time
          </Text>
        <Text size={13} h3 color="white">
        18:00
        </Text>
        <Text size={15} weight="bold" transform="uppercase" color="yellow">          
              Duration
          </Text>
        <Text size={13} h3 color="white">
        2.0 Hours
        </Text>
        <Text size={15} weight="bold" transform="uppercase" color="yellow">          
              Location
          </Text>
        <Text size={13} h3 color="white">
        West Balboa Park
        </Text>
        <Text size={15} weight="bold" transform="uppercase" color="yellow">          
              Attendees
          </Text>
        <Text size={13} h3 color="white">
        3
        </Text>
        <Text size={15} weight="bold" transform="uppercase" color="yellow">          
              Info
          </Text>
        <Text size={13} h3 color="white">
        Come join us for a quick pickup game for an hour. Bring your own drinks and sunscreen.
        </Text>
        
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0, color: "#94f9f0" ,bg: "#030303" }}>
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Buddy Up
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
