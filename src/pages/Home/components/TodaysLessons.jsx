import React from "react";
import LessonCard from "../../../components/LessonCard";
import { Heading, Flex } from "@chakra-ui/react";
import { getTodaysLessons } from "../../../api/supabase";

const TodaysLessons = () => {
  const [lessons, setLessons] = React.useState([]);

  React.useEffect(() => {
    getTodaysLessons().then((lessons) => {
      setLessons(lessons);
    });
  }, []);

  return (
    <Flex width="100%" flexDir="column" gap={4}>
      <Heading ml={3} mt={10}>
        Today's Lessons
      </Heading>
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          id={lesson.id}
          title={lesson.topic}
          summary={lesson.overview}
          isComplete={lesson.is_complete}
        />
      ))}
    </Flex>
  );
};

export default TodaysLessons;
