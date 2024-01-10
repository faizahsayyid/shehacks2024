import React from "react";
import Section from "./components/Section";
import Steps from "./components/Steps";
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { getLesson, completeLesson } from "../../api/supabase";

const Lesson = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  const [lesson, setLesson] = React.useState({
    topic: "",
    overview: "",
    activate_your_knowledge: "",
    expand_your_knowledge: "",
    reflection_and_next_steps: "",
  });

  React.useEffect(() => {
    getLesson(id).then((res) => {
      setLesson(res);
    });
  }, [id]);

  const lessonSections = [
    {
      headerText: "Overview",
      bodyText: lesson.overview,
    },
    {
      headerText: "Activate Your Knowledge",
      bodyText: lesson.activate_your_knowledge,
    },
    {
      headerText: "Expand Your Knowledge",
      bodyText: lesson.expand_your_knowledge,
    },
    {
      headerText: "Next Steps",
      bodyText: lesson.reflection_and_next_steps,
    },
  ];

  const onComplete = async () => {
    await completeLesson(id);
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
