import React from "react";
import Budget from "./components/Budget";
import TodaysLessons from "./components/TodaysLessons";
import { Button, Center, Flex, Heading, Circle } from "@chakra-ui/react";
import DarkAgoraLogo from "../../assets/dark-logo.svg";

const Home = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    return (
      <>
        <Budget />
        <TodaysLessons />
      </>
    );
  } else {
    return (
      <Center mt="150px">
        <Flex alignItems="center">
          <Circle size="500px" bgColor="purple.100" mr="100px">
            <img
              src={DarkAgoraLogo}
              alt="Agora Logo"
              width="500px"
              height="500px"
              color="white"
            />
          </Circle>
          <Flex flexDir="column" gap={8} alignItems="center">
            <Heading fontWeight="bold">
              Scroll to, not through, your future.
            </Heading>
            <Button
              size="lg"
              bgColor="purple.100"
              _hover={{ bgColor: "purple.200" }}
              onClick={() => {
                window.location.replace("/getting-started");
              }}
            >
              Get Started!
            </Button>
          </Flex>
        </Flex>
      </Center>
    );
  }
};

export default Home;
