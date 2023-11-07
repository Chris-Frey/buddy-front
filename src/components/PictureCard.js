import { Card } from "@nextui-org/react";

const PictureCard = ({currentActivity}) => {
return(
  <>
  <Card css={{w: 600, h: 640}}>
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
  </>
)
};

export default PictureCard
