import { Box, Heading, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const Section = ({ headerText, bodyText }) => {
  return (
    <Box>
      <Heading mb={5} color={"gray.600"}>
        {headerText}
      </Heading>
      {bodyText.split("\n").map((paragraph, index) => (
        <Text key={index} mb={2}>
          {paragraph}
        </Text>
      ))}
    </Box>
  );
};

Section.propTypes = {
  headerText: PropTypes.string,
  bodyText: PropTypes.string,
};

export default Section;
