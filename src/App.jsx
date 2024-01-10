import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Root from "./pages/Root";
import Settings from "./pages/Settings";
import Lesson from "./pages/Lesson";
import History from "./pages/History";
import GettingStarted from "./pages/GettingStarted";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/lesson/:id",
        element: <Lesson />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/getting-started",
        element: <GettingStarted />,
      },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
