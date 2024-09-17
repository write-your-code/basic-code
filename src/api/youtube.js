import axios from "axios";

const API_KEY = "AIzaSyC1a0wf_QdFYMuDwMZWTP1saTqZcjY7mxE";
// const CHANNEL_ID = "UCdMBvHugZtN_FZ6oh8L5BHA";
// const CHANNEL_ID = "@BLFootballTalks";

export const getChannelDetails = async () => {
  const forHandle = "@cristiano";
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&forHandle=${forHandle}&key=${API_KEY}`
  );

  const data = response.data.items[0];

  return {
    subscriberCount: data.statistics.subscriberCount,
    videoCount: data.statistics.videoCount,
    viewCount: data.statistics.viewCount,
    channelName: data.snippet.title,
    profilePicture: data.snippet.thumbnails.default.url,
  };
};
export const getBeastDetails = async () => {
  const forHandle = "@MrBeast";
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&forHandle=${forHandle}&key=${API_KEY}`
    );

    const data = response.data.items[0];

    return {
      subscriberCount: data.statistics.subscriberCount,
      videoCount: data.statistics.videoCount,
      viewCount: data.statistics.viewCount,
      channelName: data.snippet.title,
      profilePicture: data.snippet.thumbnails.default.url,
    };
  } catch (error) {
    console.log(error);
  }
};
