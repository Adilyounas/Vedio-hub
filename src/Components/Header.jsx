import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef()

  return (
    <>
      <Button
        pos={"fixed"}
        zIndex="overlay"

        left="4"
        top={"4"}
        colorScheme="purple"
        p={"0"}
        w="10"
        h={"10"}
        borderRadius="full"
        onClick={onOpen}
      >
        <BiMenuAltLeft size={"20"} />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Hub</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button variant={"ghost"} colorScheme="purple" onClick={onClose}>
                <NavLink to={"/"}>Home</NavLink>
              </Button>

              <Button variant={"ghost"} colorScheme="purple" onClick={onClose}>
                <NavLink to={"/videos"}>Videos</NavLink>
              </Button>

              <Button variant={"ghost"} colorScheme="purple" onClick={onClose}>
                <NavLink to={"/videos?category=free"}>Free Videos</NavLink>
              </Button>

              <Button variant={"ghost"} colorScheme="purple" onClick={onClose}>
                <NavLink to={"/upload"}>Upload Video</NavLink>
              </Button>
            </VStack>

            <HStack
              justifyContent={"space-evenly"}
              w={"full"}
              pos={"absolute"}
              bottom="8"
              left={"0"}
            >
              <Button colorScheme={"purple"} onClick={onClose}>
                <NavLink to={"/login"}>Log In</NavLink>
              </Button>

              <Button
                variant={"outline"}
                colorScheme={"purple"}
                onClick={onClose}
              >
                <NavLink to={"/signup"}>Sign Up</NavLink>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
