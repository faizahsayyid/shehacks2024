import React from "react";
import {
  Stepper,
  Step,
  StepIndicator,
  StepIcon,
  StepStatus,
  StepNumber,
  Box,
  StepTitle,
  StepSeparator,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const GettingStartedSteps = ({ index }) => {
  return (
    <Stepper index={index} colorScheme="purple">
      <Step key={0}>
        <StepIndicator>
          <StepStatus
            complete={<StepIcon />}
            incomplete={<StepNumber />}
            active={<StepNumber />}
          />
        </StepIndicator>
        <Box flexShrink="0">
          <StepTitle>Phone Usage</StepTitle>
        </Box>
        <StepSeparator />
      </Step>
      <Step key={1}>
        <StepIndicator>
          <StepStatus
            complete={<StepIcon />}
            incomplete={<StepNumber />}
            active={<StepNumber />}
          />
        </StepIndicator>
        <Box flexShrink="0">
          <StepTitle>Entertainment Budget</StepTitle>
        </Box>
        <StepSeparator />
      </Step>
      <Step key={2}>
        <StepIndicator>
          <StepStatus
            complete={<StepIcon />}
            incomplete={<StepNumber />}
            active={<StepNumber />}
          />
        </StepIndicator>
        <Box flexShrink="0">
          <StepTitle>Choose Applications</StepTitle>
        </Box>
        <StepSeparator />
      </Step>
      <Step key={3}>
        <StepIndicator>
          <StepStatus
            complete={<StepIcon />}
            incomplete={<StepNumber />}
            active={<StepNumber />}
          />
        </StepIndicator>
        <Box flexShrink="0">
          <StepTitle>Interests</StepTitle>
        </Box>
        <StepSeparator />
      </Step>
    </Stepper>
  );
};

GettingStartedSteps.propTypes = {
  index: PropTypes.number,
};

export default GettingStartedSteps;
