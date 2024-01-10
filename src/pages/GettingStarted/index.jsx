import React from "react";
import GettingStartedSteps from "./components/GettingStartedSteps";
import PhoneUsage from "./components/PhoneUsage";
import { Flex, Button } from "@chakra-ui/react";
import BudgetSettings from "../../components/BudgetSettings";
import Tracking from "../../components/Tracking";
import Interests from "../../components/Interests";
import {
  updateBudget,
  updatePrivacySettings,
  updateInterests,
} from "../../api/supabase";

const GettingStarted = () => {
  const [index, setIndex] = React.useState(0);
  const [budget, setBudget] = React.useState(0);
  const [interests, setInterests] = React.useState([""]);
  const [privacySettings, setPrivacySettings] = React.useState({
    igTime: false,
    igInteractions: false,
    tiktokTime: false,
    tiktokInteractions: false,
    netflixTime: false,
    netflixInteractions: false,
    chromeTime: false,
    chromeInteractions: false,
  });

  const steps = {
    0: <PhoneUsage budget={budget} setBudget={setBudget} />,
    1: <BudgetSettings budget={budget} setBudget={setBudget} />,
    2: (
      <Tracking
        privacySettings={privacySettings}
        setPrivacySettings={setPrivacySettings}
      />
    ),
    3: <Interests interests={interests} setInterests={setInterests} />,
  };

  const onFinish = async () => {
    await updateBudget(budget);
    await updatePrivacySettings(privacySettings);
    await updateInterests(interests);
    localStorage.setItem("isLoggedIn", "true");
    window.location.replace("/");
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
          onClick={onFinish}
        >
          Finish
        </Button>
      )}
    </Flex>
  );
};

export default GettingStarted;
