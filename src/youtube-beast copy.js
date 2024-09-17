import axios from "axios";

const API_KEY = "AIzaSyAsjR5dwCZjkOkSDsEQQdcYfqch3bImifs";
// const CHANNEL_ID = "UCdMBvHugZtN_FZ6oh8L5BHA";
const CHANNEL_ID = "@BLFootballTalks";
const forHandle = "@MrBeast";

export const getChannelDetailsB = async () => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&forHandle=${forHandle}&key=${API_KEY}`
  );

  const data = response.data.items[0];

  return {
    subscriberCount: data.statistics.subscriberCount,
    channelName: data.snippet.title,
    profilePicture: data.snippet.thumbnails.default.url,
  };
};
