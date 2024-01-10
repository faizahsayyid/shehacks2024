import React from "react";
import {
  Card,
  Heading,
  Input,
  Text,
  Flex,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import { MdOutlineSmartphone } from "react-icons/md";
import PropTypes from "prop-types";

const PhoneUsage = ({ budget, setBudget }) => {
  return (
    <Card p={2} mb={5}>
      <CardHeader>
        <Heading size="md" my={3}>
          <Flex alignItems="center" gap={4}>
            <MdOutlineSmartphone /> Phone Usage
          </Flex>
        </Heading>
        <Text color="gray.500" mb={2}>
          How much time do you spend on your phone every day?
        </Text>
      </CardHeader>
      <CardBody>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" gap={5}>
            <Input
              type="number"
              w="90%"
              defaultValue={parseInt(budget)}
              onChange={(e) => setBudget(parseInt(e.target.value))}
            />
            <Text>hrs</Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

PhoneUsage.propTypes = {
  budget: PropTypes.number,
  setBudget: PropTypes.func,
};

export default PhoneUsage;
