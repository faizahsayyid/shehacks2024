import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import BudgetSettings from "../../components/BudgetSettings";
import Tracking from "../../components/Tracking";
import Interests from "../../components/Interests";
import {
  updateBudget,
  updatePrivacySettings,
  updateInterests,
  getBudget,
  getPrivacySettings,
  getInterests,
} from "../../api/supabase";

const Settings = () => {
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

  const onUpdateBudget = async (value) => {
    setBudget(value);
    await updateBudget(value);
  };

  const onUpdatePrivacySettings = async (value) => {
    setPrivacySettings(value);
    await updatePrivacySettings(value);
  };

  const onUpdateInterests = async (value) => {
    setInterests(value);
    await updateInterests(value);
  };

  React.useEffect(() => {
    getBudget().then((res) => {
      setBudget(parseFloat(res.max_budget));
    });
    getInterests().then((res) => {
      setInterests(res.interests);
    });
    getPrivacySettings().then((res) => {
      setPrivacySettings({
        igTime: res.instagram_time_spent,
        igInteractions: res.instagram_data,
        tiktokTime: res.tiktok_time_spent,
        tiktokInteractions: res.tiktok_data,
        netflixTime: res.netflix_time_spent,
        netflixInteractions: res.netflix_data,
        chromeTime: res.chrome_time_spent,
        chromeInteractions: res.chrome_data,
      });
    });
  }, []);

  return (
    <Box>
      <Heading mb={5}>Settings</Heading>
      <BudgetSettings budget={budget} setBudget={onUpdateBudget} />
      <Tracking
        privacySettings={privacySettings}
        setPrivacySettings={onUpdatePrivacySettings}
      />
      <Interests interests={interests} setInterests={onUpdateInterests} />
    </Box>
  );
};

export default Settings;
