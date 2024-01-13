import React from "react";
import Section from "./components/Section";
import Steps from "./components/Steps";
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Lesson = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();

  const lessonSections = [
    {
      headerText: "Overview",
      bodyText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam aliquam, justo odio consequat quam, quis pretium quam elit vitae nisi. Aliquam erat volutpat. Nulla facilisi. Sed euismod, sem quis aliquet ultricies, odio nisl tincidunt massa, sit amet aliquam nisi nunc vitae mauris. Donec euismod, nisl vitae aliquam aliquam, justo odio consequat quam, quis pretium quam elit vitae nisi. Aliquam erat volutpat. Nulla facilisi. 
        
        Sed euismod, sem quis aliquet ultricies, odio nisl tincidunt massa, sit amet aliquam nisi nunc vitae mauris. Donec euismod, nisl vitae aliquam aliquam, justo odio consequat quam, quis pretium quam elit vitae`,
    },
    {
      headerText: "Activate Your Knowledge",
      bodyText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam aliquam, justo odio consequat quam, quis pretium quam elit vitae nisi. Aliquam erat volutpat. Nulla facilisi. Sed euismod, sem quis aliquet ultricies, odio nisl tincidunt massa, sit amet aliquam nisi nunc vitae mauris. Donec euismod, nisl vitae aliquam aliquam, justo odio consequat quam, quis pretium quam elit vitae nisi. Aliquam erat volutpat. Nulla facilisi. 
        
        Sed euismod, sem quis aliquet ultricies, odio nisl tincidunt massa, sit amet aliquam nisi nunc vitae mauris. Donec euismod, nisl vitae aliquam aliquam, justo odio consequat quam, quis pretium quam elit vitae`,
    },
    {
      headerText: "Expand Your Knowledge",
      bodyText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam aliquam, justo odio consequat quam, quis pretium quam elit vitae nisi. Aliquam erat volutpat. Nulla facilisi. Sed euismod, sem quis aliquet ultricies, odio nisl tincidunt massa, sit amet aliquam nisi nunc vitae mauris. Donec euismod, nisl vitae aliquam`,
    },
    {
      headerText: "Next Steps",
      bodyText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam aliquam, justo odio consequat quam, quis pretium quam elit vitae nisi. Aliquam erat volutpat. Nulla facilisi. Sed euismod, sem quis aliquet ultricies, odio nisl tincidunt massa, sit amet aliquam nisi nunc vitae mauris. Donec euismod, nisl vitae aliquam`,
    },
  ];

  const onComplete = () => {
    navigate("/");
  };

  return (
    <Flex gap={8} flexDir="column">
      <Steps index={activeStep} />
      <Section
        headerText={lessonSections[activeStep].headerText}
        bodyText={lessonSections[activeStep].bodyText}
      />
      {activeStep < 3 ? (
        <Button
          alignSelf="end"
          width="100px"
          bgColor="purple.100"
          onClick={() => setActiveStep(activeStep + 1)}
        >
          Next
        </Button>
      ) : (
        <Button
          alignSelf="end"
          width="100px"
          bgColor="purple.100"
          onClick={onComplete}
        >
          Complete
        </Button>
      )}
    </Flex>
  );
};

export default Lesson;
