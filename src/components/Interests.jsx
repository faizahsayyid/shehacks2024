import React from "react";
import {
  Card,
  Heading,
  Input,
  Text,
  Flex,
  Button,
  CardHeader,
  CardBody,
  VStack,
} from "@chakra-ui/react";
import { FaIcons } from "react-icons/fa";
import { CloseIcon, TimeIcon } from "@chakra-ui/icons";

const Interests = () => {
  return (
    <Card p={2} mb={5}>
      <CardHeader>
        <Heading size="md" my={3}>
          <Flex alignItems="center" gap={4}>
            <FaIcons /> Interests
          </Flex>
        </Heading>
        <Text color="gray.500" mb={2}>
          Let us know what you would like to learn about!
        </Text>
      </CardHeader>
      <CardBody>
        <Flex gap={5} width="100%" flexDir="column">
          <Flex justifyContent="space-between" alignItems="center">
            <Input type="text" w="90%" defaultValue={"Sports"} />
            <CloseIcon />
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <Input type="text" w="90%" defaultValue={"Philosophy"} />
            <CloseIcon />
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <Input type="text" w="90%" defaultValue={"Animals"} />
            <CloseIcon />
          </Flex>
          <Flex alignItems="center" alignSelf="flex-end" gap={4} mt={2}>
            <Button bgColor="purple.100">Add Interest</Button>
            <Button bgColor="purple.100">Save</Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Interests;
