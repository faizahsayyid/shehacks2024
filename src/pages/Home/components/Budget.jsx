import React from "react";
import { Progress, Text, Flex, Card, Heading } from "@chakra-ui/react";
import { getBudget } from "../../../api/supabase";

const Budget = () => {
  const [budget, setBudget] = React.useState(0);
  const [budgetUsed, setBudgetUsed] = React.useState(0);

  const percentage = Math.round((budgetUsed / budget) * 100);

  React.useEffect(() => {
    getBudget().then((res) => {
      setBudget(parseFloat(res.max_budget));
      setBudgetUsed(parseFloat(res.currently_used));
    });
  }, []);

  return (
    <Card padding={5} bgColor="gray.100">
      <Flex mb={5}>
        <Heading fontSize="x-large" fontWeight="500">
          Entertainment Budget
        </Heading>
        <Text fontSize="large" fontWeight="500" ml="auto">
          {percentage}%
        </Text>
      </Flex>
      <Progress value={percentage} colorScheme="gray" mb={2} bgColor="white" />
      <Flex justifyContent="space-between">
        <Text color="gray.600">0hrs</Text>
        <Text color="gray.600">{budget} hrs</Text>
      </Flex>
    </Card>
  );
};

export default Budget;
