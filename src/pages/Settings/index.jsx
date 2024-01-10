import { Box, Card, Heading } from "@chakra-ui/react";
import React from "react";
import BudgetSettings from "../../components/BudgetSettings";
import Tracking from "../../components/Tracking";

const Settings = () => {
  return (
    <Box>
      <Heading mb={5}>Settings</Heading>
      <BudgetSettings />
      <Tracking />
      <Card p={5}>
        <Heading size="md" mt={3}>
          Interests
        </Heading>
      </Card>
    </Box>
  );
};

export default Settings;
