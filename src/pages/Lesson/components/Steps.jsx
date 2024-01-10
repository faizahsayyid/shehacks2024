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

const Steps = ({ index }) => {
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
          <StepTitle>Overview</StepTitle>
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
          <StepTitle>Activate Your Knowledge</StepTitle>
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
          <StepTitle>Expand Your Knowledge</StepTitle>
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
          <StepTitle>Next Steps</StepTitle>
        </Box>
        <StepSeparator />
      </Step>
    </Stepper>
  );
};

Steps.propTypes = {
  index: PropTypes.number,
};

export default Steps;
