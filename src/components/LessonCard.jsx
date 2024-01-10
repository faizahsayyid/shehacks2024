import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Flex,
  Circle,
  Text,
  Box,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import { CheckCircleIcon, Icon } from "@chakra-ui/icons";
import { FaBookOpen } from "react-icons/fa";

const LessonCard = ({ title, summary, isComplete }) => {
  return (
    <Card p={5}>
      <CardHeader>
        <Flex alignItems="center" gap={4}>
          {isComplete ? (
            <CheckCircleIcon fontSize="2rem" color="green.500" />
          ) : (
            <Circle size="2rem" bgColor="gray.700">
              <Icon as={FaBookOpen} fontSize="1rem" color="purple.100" />
            </Circle>
          )}
          <Box>
            <Heading size="large">{title}</Heading>
            <Text fontSize="0.75em" color="gray.600">
              5 mins
            </Text>
          </Box>
        </Flex>
      </CardHeader>
      {!isComplete && <CardBody>{summary}</CardBody>}
    </Card>
  );
};

LessonCard.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  isComplete: PropTypes.bool,
};

export default LessonCard;
