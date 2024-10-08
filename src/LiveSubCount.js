import React, { useState, useEffect } from "react";
import { getChannelDetails, getBeastDetails } from "./api/youtube";
import { getChannelDetailsB } from "./api/youtube-beast";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const LiveSubCount = () => {
  const [channelDetails, setChannelDetails] = useState({
    subscriberCount: null,
    channelName: "",
    profilePicture: "",
  });
  const [beastDetails, setBeastDetails] = useState({
    subscriberCount: null,
    channelName: "",
    profilePicture: "",
  });

  const fetchChannelDetails = async () => {
    const details = await getChannelDetails();
    setChannelDetails(details);
    console.log(details);
  };
  const fetchBeastDetails = async () => {
    const details = await getBeastDetails();
    setBeastDetails(details);
    console.log(details);
  };

  useEffect(() => {
    fetchChannelDetails();
    fetchBeastDetails();
    const intervalId = setInterval(fetchChannelDetails, 30000000); // Fetch every 3 seconds
    const intervalId1 = setInterval(fetchBeastDetails, 30000000); // Fetch every 3 seconds

    return () => {
      clearInterval(intervalId);
      // clearInterval(intervalId1);
    }; // Clean up on unmount
  }, []);

  return (
    <div className="grid grid-cols-3 items-center justify-center min-h-screen bg-black text-white">
      <div className="flex flex-col items-center space-y-4">
        <img
          src={channelDetails?.profilePicture}
          alt="Channel Thumbnail"
          className="w-24 h-24 rounded-full border-4 border-white"
        />
        <h1 className="text-4xl font-semibold">
          {channelDetails?.channelName}
        </h1>
        <div className="text-7xl font-bold animate-bounce">
          {channelDetails?.subscriberCount !== null
            ? parseInt(channelDetails?.subscriberCount).toLocaleString()
            : "Loading..."}
        </div>
        <p className="text-xl bg-blue-400 p-2 rounded">Subscribers</p>

        <div className="text-7xl font-bold animate-ping">
          {channelDetails?.videoCount !== null
            ? parseInt(channelDetails?.videoCount).toLocaleString()
            : "Loading..."}
        </div>

        <p className="text-xl">Videos</p>
        <div className="text-7xl font-bold animate-pulse">
          {channelDetails?.viewCount !== null
            ? parseInt(channelDetails.viewCount).toLocaleString()
            : "Loading..."}
        </div>

        <p className="text-xl">Total Views</p>

        {/* <a
          href="https://www.youtube.com/@kwargdevs?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-x-2 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Subscribe
          <ArrowUpRightIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
        </a> */}
      </div>
      <div>
        Difference:
        {parseInt(beastDetails?.subscriberCount) -
          parseInt(channelDetails?.videoCount)}
      </div>
      <div className="flex flex-col items-center space-y-4">
        <img
          src={beastDetails?.profilePicture}
          alt="Channel Thumbnail"
          className="w-24 h-24 rounded-full border-4 border-white"
        />
        <h1 className="text-4xl font-semibold">{beastDetails?.channelName}</h1>
        <div className="text-7xl font-bold animate-bounce">
          {beastDetails?.subscriberCount !== null
            ? parseInt(beastDetails?.subscriberCount).toLocaleString()
            : "Loading..."}
        </div>
        <p className="text-xl bg-blue-400 p-2 rounded">Subscribers</p>

        <div className="text-7xl font-bold animate-ping">
          {beastDetails?.videoCount !== null
            ? parseInt(beastDetails?.videoCount).toLocaleString()
            : "Loading..."}
        </div>

        <p className="text-xl">Videos</p>
        <div className="text-7xl font-bold animate-pulse">
          {beastDetails?.viewCount !== null
            ? parseInt(beastDetails.viewCount).toLocaleString()
            : "Loading..."}
        </div>

        <p className="text-xl">Total Views</p>

        {/* <a
          href="https://www.youtube.com/@kwargdevs?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-x-2 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Subscribe
          <ArrowUpRightIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
        </a> */}
      </div>
    </div>
  );
};

export default LiveSubCount;
