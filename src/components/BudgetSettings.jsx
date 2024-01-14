import React, { useEffect } from "react";
import {
  Card,
  Heading,
  Input,
  Text,
  Flex,
  Button,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import { FaVideo } from "react-icons/fa";
import PropTypes from "prop-types";

const BudgetSettings = ({ budget, setBudget }) => {
  const [value, setValue] = React.useState(budget);
  useEffect(() => setValue(budget), [budget]);

  return (
    <Card p={2} mb={5}>
      <CardHeader>
        <Heading size="md" my={3}>
          <Flex alignItems="center" gap={4}>
            <FaVideo /> Entertainment Budget
          </Flex>
        </Heading>
        <Text color="gray.500" mb={2}>
          We recommend decreasing your entertainment by 30 minutes every week
          until you reach a limit of 2 hours per day.
        </Text>
      </CardHeader>
      <CardBody>
        <Flex alignItems="center" gap={2} justifyContent="space-between">
          <Text fontWeight={700} color="gray.500">
            Your Daily Budget:
          </Text>
          <Flex alignItems="center" gap={8}>
            <Flex alignItems="center" gap={2}>
              <Input
                type="number"
                w="200px"
                value={parseInt(value)}
                onChange={(e) => {
                  setValue(parseInt(e.target.value));
                }}
              />
              <Text fontWeight={700} color="gray.500">
                hrs
              </Text>
            </Flex>
            <Button
              bgColor="purple.100"
              onClick={() => {
                setBudget(value);
              }}
            >
              Save
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

BudgetSettings.propTypes = {
  budget: PropTypes.number,
  setBudget: PropTypes.func,
};

export default BudgetSettings;
