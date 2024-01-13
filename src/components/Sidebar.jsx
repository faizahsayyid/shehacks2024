import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import { Link as ReactRouterLink } from "react-router-dom";
import { FaHome, FaVideo, FaHistory, FaCog } from "react-icons/fa";

const SideBarContent = ({ onClick }) => (
  <VStack alignItems="start" color="gray.800">
    <Button
      as={ReactRouterLink}
      to="/"
      w="100%"
      onClick={onClick}
      variant="ghost"
      justifyContent="flex-start"
      _hover={{ bg: "purple.200" }}
    >
      <FaHome />
      <Text ml={3}>Home</Text>
    </Button>
    <Button
      as={ReactRouterLink}
      to="/entertainment"
      w="100%"
      onClick={onClick}
      variant="ghost"
      justifyContent="flex-start"
      _hover={{ bg: "purple.200" }}
    >
      <FaVideo />
      <Text ml={3}>Entertainment</Text>
    </Button>
    <Button
      as={ReactRouterLink}
      to="/history"
      w="100%"
      onClick={onClick}
      variant="ghost"
      justifyContent="flex-start"
      _hover={{ bg: "purple.200" }}
    >
      <FaHistory />
      <Text ml={3}>History</Text>
    </Button>
    <Button
      as={ReactRouterLink}
      to="/settings"
      w="100%"
      onClick={onClick}
      variant="ghost"
      justifyContent="flex-start"
      _hover={{ bg: "purple.200" }}
    >
      <FaCog />
      <Text ml={3}>Settings</Text>
    </Button>
  </VStack>
);

SideBarContent.propTypes = {
  onClick: PropTypes.func,
};

const SideBar = ({ isOpen, variant, onClose }) => {
  return variant === "sidebar" ? (
    <Box
      position="fixed"
      left={0}
      p={5}
      pt="calc(4em + 40px)"
      w="250px"
      top="0"
      h="100%"
      bgColor="purple.100"
    >
      <SideBarContent onClick={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bgColor="purple.100">
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo />
          </DrawerHeader>
          <DrawerBody>
            <SideBarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

SideBar.propTypes = {
  isOpen: PropTypes.bool,
  variant: PropTypes.string,
  onClose: PropTypes.func,
};

export default SideBar;
