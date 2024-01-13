import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar";
import Header from "../components/Header";
import { Box, Container, useBreakpointValue } from "@chakra-ui/react";

const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

const Root = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <>
      <Box ml={!variants?.navigationButton}>
        <Header
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}
        />
      </Box>
      {isLoggedIn && (
        <SideBar
          variant={variants?.navigation}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
      )}
      <Box
        ml={!variants?.navigationButton && isLoggedIn ? 250 : 0}
        mt="calc(4em + 40px)"
      >
        <Container maxW="container.lg">
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default Root;
