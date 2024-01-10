import React from "react";
import { Flex, Text, Circle } from "@chakra-ui/react";
import PropTypes from "prop-types";
import DarkAgoraLogo from "../assets/dark-logo.svg";

const Logo = ({ fontSize = "1.5em" }) => {
  return (
    <Flex alignItems="center" gap={3}>
      <Circle size="50px" bgColor="purple.100">
        <img
          src={DarkAgoraLogo}
          alt="Agora Logo"
          width="50px"
          height="50px"
          color="white"
        />
      </Circle>
      <Text fontSize={fontSize}>agora</Text>
    </Flex>
  );
};

Logo.propTypes = {
  fontSize: PropTypes.string,
};

export default Logo;
