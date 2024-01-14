import React from "react";
import {
  Card,
  Heading,
  Text,
  Flex,
  Image,
  CardHeader,
  CardBody,
  Divider,
  Box,
  Switch,
  Button,
  CardFooter,
} from "@chakra-ui/react";
import { FaChartBar } from "react-icons/fa";
import TikTokLogo from "../assets/tiktok.png";
import InstagramLogo from "../assets/instagram.png";
import NeflixLogo from "../assets/netflix.jpeg";
import ChromeLogo from "../assets/chrome.png";
import PropTypes from "prop-types";

const Tracking = ({ privacySettings, setPrivacySettings }) => {
  const [value, setValue] = React.useState(privacySettings);
  React.useEffect(() => {
    console.log("privacySettings", privacySettings);
    setValue(privacySettings);
  }, [privacySettings]);

  const onSave = () => {
    setPrivacySettings(value);
  };

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.checked });
  };

  return (
    <Card p={2} mb={5}>
      <CardHeader>
        <Heading size="md" my={3}>
          <Flex alignItems="center" gap={4}>
            <FaChartBar /> Tracked Platforms
          </Flex>
        </Heading>
      </CardHeader>
      <CardBody>
        <Divider />
        <Flex my={6} gap={10} width="100%" alignItems="center">
          <Image
            src={TikTokLogo}
            alt="TikTok Logo"
            width="50px"
            height="50px"
            borderRadius={"10px"}
          />
          <Box width="100%">
            <Text color="gray.500" fontWeight={800} fontSize="md" mb={2}>
              TikTok
            </Text>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              mb={3}
            >
              <Text color="gray.500">
                Allow time spent on the app to be tracked
              </Text>
              <Switch
                isChecked={value ? value.tiktokTime : false}
                name="tiktokTime"
                onChange={onChange}
              />
            </Flex>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Text color="gray.500">Allow app interactions to be tracked</Text>
              <Switch
                isChecked={value ? value.tiktokInteractions : false}
                name="tiktokInteractions"
                onChange={onChange}
              />
            </Flex>
          </Box>
        </Flex>
        <Divider />
        <Flex my={6} gap={10} width="100%" alignItems="center">
          <Image
            src={InstagramLogo}
            alt="Instagram Logo"
            width="50px"
            height="50px"
            borderRadius={"10px"}
          />
          <Box width="100%">
            <Text color="gray.500" fontWeight={800} fontSize="md" mb={2}>
              Instagram
            </Text>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              mb={3}
            >
              <Text color="gray.500">
                Allow time spent on the app to be tracked
              </Text>
              <Switch
                name="igTime"
                onChange={onChange}
                isChecked={value ? value.igTime : false}
              />
            </Flex>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Text color="gray.500">Allow app interactions to be tracked</Text>
              <Switch
                name="igInteractions"
                onChange={onChange}
                isChecked={value ? value.igInteractions : false}
              />
            </Flex>
          </Box>
        </Flex>
        <Divider />
        <Flex my={6} gap={10} width="100%" alignItems="center">
          <Image
            src={NeflixLogo}
            alt="Netflix Logo"
            width="50px"
            height="50px"
            borderRadius={"10px"}
          />
          <Box width="100%">
            <Text color="gray.500" fontWeight={800} fontSize="md" mb={2}>
              Netflix
            </Text>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              mb={3}
            >
              <Text color="gray.500">
                Allow time spent on the app to be tracked
              </Text>
              <Switch
                name="netflixTime"
                onChange={onChange}
                isChecked={value ? value.netflixTime : false}
              />
            </Flex>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Text color="gray.500">Allow app interactions to be tracked</Text>
              <Switch
                name="netflixInteractions"
                onChange={onChange}
                isChecked={value ? value.netflixInteractions : false}
              />
            </Flex>
          </Box>
        </Flex>
        <Divider />
        <Flex my={6} gap={10} width="100%" alignItems="center">
          <Image
            src={ChromeLogo}
            alt="Chrome Logo"
            width="50px"
            height="50px"
            borderRadius={"10px"}
          />
          <Box width="100%">
            <Text color="gray.500" fontWeight={800} fontSize="md" mb={2}>
              Chrome
            </Text>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              mb={3}
            >
              <Text color="gray.500">
                Allow time spent on the app to be tracked
              </Text>
              <Switch
                name="chromeTime"
                onChange={onChange}
                isChecked={value ? value.chromeTime : false}
              />
            </Flex>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Text color="gray.500">Allow app interactions to be tracked</Text>
              <Switch
                name="chromeInteractions"
                onChange={onChange}
                isChecked={value ? value.chromeInteractions : false}
              />
            </Flex>
          </Box>
        </Flex>
      </CardBody>
      <CardFooter justifyContent="flex-end">
        <Button bgColor="purple.100" onClick={onSave}>
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};

Tracking.propTypes = {
  privacySettings: PropTypes.object,
  setPrivacySettings: PropTypes.func,
};

export default Tracking;
