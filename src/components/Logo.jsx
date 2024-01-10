import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Logo = ({ fontSize = "1.5em" }) => {
  return (
    <Flex alignItems="center" gap={3}>
      <HiLightBulb fontSize={fontSize} />
      <Text fontSize={fontSize}>agora</Text>
    </Flex>
  );
};

Logo.propTypes = {
  fontSize: PropTypes.string,
};

export default Logo;
