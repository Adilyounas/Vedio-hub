import React from "react";
import {
  Box,
  Img,
  Heading,
  Container,
  Text,
  Stack,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "xl",
};

const Home = () => {
  return (
    <Box>
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
      >
        <Box w={"full"} h={"100vh"}>
          <Img src={img1} />
          <Heading
            bgColor={"blackAlpha.600"}
            color={"white"}
            {...headingOptions}
          >
            Watch The Future
          </Heading>
        </Box>

        <Box w={"full"} h={"100vh"}>
          <Img src={img2} />
          <Heading
            bgColor={"blackAlpha.500"}
            color={"white"}
            {...headingOptions}
          >
            Future is Gaming
          </Heading>
        </Box>

        <Box w={"full"} h={"100vh"}>
          <Img src={img3} />
          <Heading
            bgColor={"blackAlpha.500"}
            color={"white"}
            {...headingOptions}
          >
            Gaming On Console
          </Heading>
        </Box>

        <Box w={"full"} h={"100vh"}>
          <Img src={img4} />
          <Heading
            bgColor={"whiteAlpha.900"}
            color={"black"}
            {...headingOptions}
          >
            Night Life Is Cool
          </Heading>
        </Box>
      </Carousel>

      <Container maxW={"container.lg"} minH={"100vh"} p="16" >
        <Heading
          textTransform={"uppercase"}
          py="2"
          w={"fit-content"}
          borderBottom={"2px solid"}
          margin="auto"
        >
          Services
        </Heading>

        <Stack
          h={"full"}
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Img src={img5} filter={"hue-rotate(-130deg)"} h={["40", 400]} />

          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, ab?
            Consequuntur saepe incidunt officiis natus magni tenetur porro
            doloremque impedit neque dolorum? Laboriosam iste similique ducimus
            molestias numquam, tempore tempora voluptatem vitae ipsum rem veniam
            ab in error, aspernatur eveniet! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ipsa saepe molestias atque non sit
            modi, eligendi beatae qui asperiores distinctio.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
