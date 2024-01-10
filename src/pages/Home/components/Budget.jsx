import React from "react";
import { Progress, Text, Flex, Card, Heading } from "@chakra-ui/react";

const Budget = () => {
  return (
    <Card padding={5} bgColor="gray.100">
      <Flex mb={5}>
        <Heading fontSize="x-large" fontWeight="500">
          Entertainment Budget
        </Heading>
        <Text fontSize="large" fontWeight="500" ml="auto">
          80%
        </Text>
      </Flex>
      <Progress value={80} colorScheme="gray" mb={2} bgColor="white" />
      <Flex justifyContent="space-between">
        <Text color="gray.600">0hrs</Text>
        <Text color="gray.600">3hrs</Text>
      </Flex>
    </Card>
  );
};

export default Budget;
