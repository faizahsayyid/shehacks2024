import React from "react";
import GettingStartedSteps from "./components/GettingStartedSteps";
import PhoneUsage from "./components/PhoneUsage";
import { Flex, Button } from "@chakra-ui/react";
import BudgetSettings from "../../components/BudgetSettings";
import Tracking from "../../components/Tracking";
import Interests from "../../components/Interests";

const GettingStarted = () => {
  const [index, setIndex] = React.useState(0);
  const [budget, setBudget] = React.useState(0);
  const [interests, setInterests] = React.useState([]);
  const [igTime, setIgTime] = React.useState(false);
  const [igInteractions, setIgInteractions] = React.useState(false);
  const [tiktokTime, setTiktokTime] = React.useState(false);
  const [tiktokInteractions, setTiktokInteractions] = React.useState(false);
  const [netflixTime, setNetflixTime] = React.useState(false);
  const [netflixInteractions, setNetflixInteractions] = React.useState(false);
  const [chromeTime, setChromeTime] = React.useState(false);
  const [chromeInteractions, setChromeInteractions] = React.useState(false);

  const steps = {
    0: <PhoneUsage budget={budget} setBudget={setBudget} />,
    1: <BudgetSettings budget={budget} setBudget={setBudget} />,
    2: (
      <Tracking
        igTime={igTime}
        setIgTime={setIgTime}
        igInteractions={igInteractions}
        setIgInteractions={setIgInteractions}
        tiktokTime={tiktokTime}
        setTiktokTime={setTiktokTime}
        tiktokInteractions={tiktokInteractions}
        setTiktokInteractions={setTiktokInteractions}
        netflixTime={netflixTime}
        setNetflixTime={setNetflixTime}
        netflixInteractions={netflixInteractions}
        setNetflixInteractions={setNetflixInteractions}
        chromeTime={chromeTime}
        setChromeTime={setChromeTime}
        chromeInteractions={chromeInteractions}
        setChromeInteractions={setChromeInteractions}
      />
    ),
    3: <Interests interests={interests} setInterests={setInterests} />,
  };

  return (
    <Flex flexDir="column" gap={12}>
      <GettingStartedSteps index={index} />
      {steps[index]}
      {index < 3 ? (
        <Button
          width="100px"
          bgColor="purple.100"
          alignSelf="end"
          onClick={() => setIndex(index + 1)}
        >
          Next
        </Button>
      ) : (
        <Button
          width="100px"
          bgColor="purple.100"
          alignSelf="end"
          onClick={() => {
            localStorage.setItem("isLoggedIn", true);
            window.location.replace("/");
          }}
        >
          Finish
        </Button>
      )}
    </Flex>
  );
};

export default GettingStarted;
