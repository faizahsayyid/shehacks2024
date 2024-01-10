import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import LessonCard from "../../components/LessonCard";
import { getAllLessons } from "../../api/supabase";

const History = () => {
  const [lessons, setLessons] = React.useState([]);

  React.useEffect(() => {
    getAllLessons().then((lessons) => {
      setLessons(lessons);
    });
  }, []);

  return (
    <Flex width="100%" flexDir="column" gap={4}>
      <Heading ml={3} mt={10}>
        All Lessons
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

export default History;
