import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import BudgetSettings from "../../components/BudgetSettings";
import Tracking from "../../components/Tracking";
import Interests from "../../components/Interests";

const Settings = () => {
  return (
    <Box>
      <Heading mb={5}>Settings</Heading>
      <BudgetSettings />
      <Tracking />
      <Interests />
    </Box>
  );
};

export default Settings;
