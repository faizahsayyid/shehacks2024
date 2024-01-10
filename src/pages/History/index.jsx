import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import LessonCard from "../../components/LessonCard";

const History = () => {
  return (
    <Flex width="100%" flexDir="column" gap={4}>
      <Heading ml={3} mt={10}>
        Past Lessons
      </Heading>
      <LessonCard
        id="1"
        title="The French Revolution"
        summary=""
        isComplete={true}
      />
      <LessonCard
        id="1"
        title="The French Revolution"
        summary=""
        isComplete={true}
      />
      <LessonCard
        id="1"
        title="The French Revolution"
        summary=""
        isComplete={true}
      />
      <LessonCard
        id="1"
        title="The French Revolution"
        summary=""
        isComplete={true}
      />
      <LessonCard
        id="1"
        title="The French Revolution"
        summary=""
        isComplete={true}
      />
    </Flex>
  );
};

export default History;
