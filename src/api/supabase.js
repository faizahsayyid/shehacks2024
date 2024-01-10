import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://plifjqptyzfuxaltsdfd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsaWZqcXB0eXpmdXhhbHRzZGZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUxODI2MzgsImV4cCI6MjAyMDc1ODYzOH0.hHAlhj9Q0XIXSnr9jskDno7EcxbELkHuTpLg6wao3Fc";

const supabase = createClient(supabaseUrl, supabaseKey);

export const updateBudget = async (budget) => {
  const budgetId = 1;
  const { data } = await supabase
    .from("Entertainment Budget")
    .update({ max_budget: budget })
    .eq("id", budgetId)
    .select();

  console.log("updateBudget", data);
  return data[0];
};

export const getBudget = async () => {
  const budgetId = 1;
  const { data } = await supabase
    .from("Entertainment Budget")
    .select()
    .eq("id", budgetId);

  console.log("getBudget", data);
  return data[0];
};

export const updatePrivacySettings = async (privacySettings) => {
  const privacyId = 1;
  const { data } = await supabase
    .from("Privacy Settings")
    .update({
      instagram_time_spent: privacySettings.igTime,
      instagram_data: privacySettings.igInteractions,
      tiktok_time_spent: privacySettings.tiktokTime,
      tiktok_data: privacySettings.tiktokInteractions,
      netflix_time_spent: privacySettings.netflixTime,
      netflix_data: privacySettings.netflixInteractions,
      chrome_time_spent: privacySettings.chromeTime,
      chrome_data: privacySettings.chromeInteractions,
    })
    .eq("id", privacyId)
    .select();

  console.log("updatePrivacySettings", data);
  return data[0];
};

export const getPrivacySettings = async () => {
  const privacyId = 1;
  const { data } = await supabase
    .from("Privacy Settings")
    .select()
    .eq("id", privacyId);

  console.log("getPrivacySettings", data);
  return data[0];
};

export const updateInterests = async (interests) => {
  const interestsId = 1;
  const { data } = await supabase
    .from("User Interests")
    .update({ interests: interests })
    .eq("id", interestsId)
    .select();

  console.log("updateInterests", data);
  return data[0];
};

export const getInterests = async () => {
  const interestsId = 1;
  const { data } = await supabase
    .from("User Interests")
    .select()
    .eq("id", interestsId);

  console.log("getInterests", data);
  return data[0];
};

export const getTodaysLessons = async () => {
  const { data } = await supabase.from("Lesson Plans").select();
  const todaysLessons = [...data]
    .sort((a, b) => {
      return a.id - b.id;
    })
    .splice(0, 3);
  console.log("getTodaysLessons", todaysLessons);
  return todaysLessons;
};

export const getAllLessons = async () => {
  const { data } = await supabase.from("Lesson Plans").select();

  console.log("getAllLessons", data);
  return data.sort((a, b) => {
    return a.id - b.id;
  });
};

export const completeLesson = async (lessonId) => {
  const { data } = await supabase
    .from("Lesson Plans")
    .update({ is_complete: true })
    .eq("id", lessonId)
    .select();

  console.log("completeLesson", data);
  return data[0];
};

export const getLesson = async (lessonId) => {
  const { data } = await supabase
    .from("Lesson Plans")
    .select()
    .eq("id", lessonId);

  console.log("getLesson", data);
  return data[0];
};
