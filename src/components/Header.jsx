import { Box, Center, IconButton, Flex } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import Logo from "./Logo";

const Header = ({ showSidebarButton = true, onShowSidebar }) => {
  return (
    <Flex
      bg="gray.800"
      p={4}
      color="purple.100"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      alignItems="center"
    >
      <Box alignItems="center">
        {showSidebarButton && (
          <IconButton
            icon={<HamburgerIcon w={8} h={8} color="purple.100" />}
            variant={"ghost"}
            _hover={{ bg: "gray.700" }}
            onClick={onShowSidebar}
          />
        )}
      </Box>
      <Center h="40px" ml={4}>
        <Logo fontSize="2em" />
      </Center>
    </Flex>
  );
};

Header.propTypes = {
  showSidebarButton: PropTypes.bool,
  onShowSidebar: PropTypes.func,
};

Header.defaultProps = {
  showSidebarButton: true,
};

export default Header;
