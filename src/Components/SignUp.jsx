import React from "react";
import { NavLink } from "react-router-dom";
import imgg from "../assets/1.jpg"
import {
  Container,
  VStack,

  Heading,
  Input,
  Button,
  Text,
  Avatar,
} from "@chakra-ui/react";

const SignUp = () => {
  return (
    <Container mb={"20"} maxW={"container.xl"} h={"100vh"} p="16">
      <form action="">
        <VStack alignItems={"stretch"} spacing="8" w={['full','96']} m="auto" my="16">
          <Heading textAlign={"center"}>VIDEO HUB</Heading>
          <Avatar src={imgg} alignSelf={"center"} boxSize="32" />

          <Input
            placeholder="Name"
            type={"text"}
            required
            focusBorderColor="purple.500"
          />



          <Input
            placeholder="Email"
            type={"email"}
            required
            focusBorderColor="purple.500"
          />

          <Input
            placeholder="Password"
            type={"password"}
            required
            focusBorderColor="purple.500"
          />

          


          <Button colorScheme={"purple"} type="submit">
           Sign Up
          </Button>

          <Text textAlign={"right"}>Alread Signed Up? {" "}
          
          <Button variant={"link"} colorScheme="purple">
            <NavLink to={"/login"}> Log In</NavLink>
          </Button>
          
          </Text>



        </VStack>
      </form>
    </Container>
  );
};



export default SignUp