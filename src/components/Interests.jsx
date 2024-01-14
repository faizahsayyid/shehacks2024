import React from "react";
import {
  Card,
  Heading,
  Input,
  Text,
  Flex,
  Button,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import { FaIcons } from "react-icons/fa";
import { CloseIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

const Interests = ({ interests, setInterests }) => {
  const [value, setValue] = React.useState(interests);
  React.useEffect(() => setValue(interests), [interests]);

  const onAdd = () => {
    setValue([...value, ""]);
  };

  const onRemove = (index) => {
    setValue(value.filter((_, i) => i !== index));
  };

  const onChange = (index, event) => {
    value[index] = event.target.value;
    setValue([...value]);
  };

  const onSave = () => {
    setInterests(value);
  };

  return (
    <Card p={2} mb={5}>
      <CardHeader>
        <Heading size="md" my={3}>
          <Flex alignItems="center" gap={4}>
            <FaIcons /> Interests
          </Flex>
        </Heading>
        <Text color="gray.500" mb={2}>
          Let us know what you would like to learn about!
        </Text>
      </CardHeader>
      <CardBody>
        <Flex gap={5} width="100%" flexDir="column">
          {value.map((interest, i) => {
            return (
              <Flex key={i} justifyContent="space-between" alignItems="center">
                <Input
                  type="text"
                  w="90%"
                  defaultValue={interest}
                  onChange={(e) => onChange(i, e)}
                />
                <CloseIcon cursor="pointer" onClick={() => onRemove(i)} />
              </Flex>
            );
          })}
          <Flex alignItems="center" alignSelf="flex-end" gap={4} mt={2}>
            <Button bgColor="purple.100" onClick={onAdd}>
              Add Interest
            </Button>
            <Button bgColor="purple.100" onClick={onSave}>
              Save
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

Interests.propTypes = {
  interests: PropTypes.array,
  setInterests: PropTypes.func,
};

export default Interests;
