import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import AgoraLogo from "../assets/dark-logo.svg";

const Logo = ({ fontSize = "1.5em" }) => {
  return (
    <Flex alignItems="center" gap={2}>
      {/* <HiLightBulb fontSize={fontSize} /> */}
      <img
        src={AgoraLogo}
        alt="Agora Logo"
        width="75px"
        height="75px"
        color="white"
      />
      <Text fontSize={fontSize}>agora</Text>
    </Flex>
  );
};

Logo.propTypes = {
  fontSize: PropTypes.string,
};

export default Logo;
