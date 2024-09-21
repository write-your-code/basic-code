import axios from "axios";

const API_KEY = "AIzaSyAsjR5dwCZjkOkSDsEQQdcYfqch3bImifs";
// const CHANNEL_ID = "UCdMBvHugZtN_FZ6oh8L5BHA";
const id = "UCdMBvHugZtN_FZ6oh8L5BHA";
// const CHANNEL_ID = "@BLFootballTalks";
const forHandle = "@MrBeast";

export const getChannelDetailsB = async () => {
  const response = await axios.get(
    `https://api.socialcounts.org/youtube-live-subscriber-count/${id}`
    // `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&forHandle=${forHandle}&key=${API_KEY}`
    // `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&forHandle=${forHandle}&key=${API_KEY}`
  );

  const data = response.data;

  return data;
};
