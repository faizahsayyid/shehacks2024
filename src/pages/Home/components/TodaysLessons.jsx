import React from "react";
import LessonCard from "../../../components/LessonCard";
import { Heading, VStack } from "@chakra-ui/react";

const TodaysLessons = () => {
  return (
    <VStack alignItems="flex-start" gap={4}>
      <Heading ml={3} mt={10}>
        Today's Lessons
      </Heading>
      <LessonCard
        title="The French Revolution"
        summary="In this dynamic lesson on the French Revolution, you will delve into the
        tumultuous events of the late 18th century that reshaped France and
        reverberated globally. Through engaging discussions and interactive
        activities, you will explore the causes, key figures, and the profound
        socio-political changes that emerged from this pivotal period, gaining a
        deeper understanding of the revolution's lasting impact on modern
        history."
        isComplete={false}
      />
      <LessonCard
        title="The French Revolution"
        summary="In this dynamic lesson on the French Revolution, you will delve into the
        tumultuous events of the late 18th century that reshaped France and
        reverberated globally. Through engaging discussions and interactive
        activities, you will explore the causes, key figures, and the profound
        socio-political changes that emerged from this pivotal period, gaining a
        deeper understanding of the revolution's lasting impact on modern
        history."
        isComplete={false}
      />
      <LessonCard
        title="The French Revolution"
        summary="In this dynamic lesson on the French Revolution, you will delve into the
        tumultuous events of the late 18th century that reshaped France and
        reverberated globally. Through engaging discussions and interactive
        activities, you will explore the causes, key figures, and the profound
        socio-political changes that emerged from this pivotal period, gaining a
        deeper understanding of the revolution's lasting impact on modern
        history."
        isComplete={false}
      />
    </VStack>
  );
};

export default TodaysLessons;
