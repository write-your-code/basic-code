import React, { useState, useEffect, useRef } from "react";
import { getChannelDetails, getBeastDetails } from "./api/youtube";
// import { getChannelDetailsB } from "../api/youtube-beast";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
const LiveSubCountAll3D = ({
  id,
  diff = 0,
  setDiff,
  setSubList,
  index,
  main = 0,
}) => {
  const [data, setData] = useState({});
  const [value, setValue] = useState(0);
  const [views, setViews] = useState(0);
  const [diffSub, setDiffSub] = useState(0);
  // for border animation
  const boxRef = useRef(null);

  useEffect(() => {
    const boxElement = boxRef.current;
    if (!boxElement) {
      return;
    }

    const updateAnimation = () => {
      const angle =
        (parseFloat(boxElement.style.getPropertyValue("--angle")) + 0.5) % 360;
      boxElement.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    requestAnimationFrame(updateAnimation);
  }, []);
  const fetchStats = async () => {
    try {
      // const response = await axios.get(
      //   `https://api-v2.nextcounts.com/api/youtube/channel/${id}`
      // );
      const responseEstSub = await axios.get(
        `https://api.socialcounts.org/youtube-live-subscriber-count/${id}`
      );

      // const data = response.data;
      const dataEst = responseEstSub.data;
      console.log("estData is: ", dataEst);
      setValue(dataEst.est_sub);
      setViews(dataEst.table[0].count);
      if (id === "UCtxD0x6AuNNqdXO9Wp5GHew") {
        setDiff && setDiff(dataEst.est_sub);
      }
      setSubList &&
        setSubList((current) => {
          current.sort((a, b) => {
            return b - a;
          });
          current.filter((value, i) => current.indexOf(value) === i);
          return [...current, dataEst.est_sub];
        });
      return data;
      // return {
      //   subscriberCount: data.statistics.subscriberCount,
      //   channelName: data.snippet.title,
      //   profilePicture: data.snippet.thumbnails.default.url,
      // };
    } catch (error) {
      console.log(error);
    }
  };
  const fetchChannelDetails = async () => {
    try {
      const response = await axios.get(
        `https://api-v2.nextcounts.com/api/youtube/channel/${id}`
      );
      const data = response.data;
      console.log("data is: ", data);
      setData(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(fetchStats, 3000); // Fetch every 3 seconds
    // const timeoutId = setTimeout(() => setValue(data.subcount), 300);
    return () => {
      clearInterval(intervalId);
    }; // Clean up on unmount
  }, []);

  useEffect(() => {
    fetchChannelDetails();
  }, []);
  return (
    <div className="mb-[0px]">
      <div
        // className="flex flex-col mx-1 bg-gradient-to-b from-orange-400 rounded-lg to-red-500 dark:from-orange-400:to-red-500 px-2 py-[1px] text-2xl items-center h-[100%]"
        className="flex flex-col mx-1 bg-gradient-to-b bg-black border-4 border-gray-100 rounded-lg px-2 py-[1px] text-2xl items-center h-[100%] pb-4"
      >
        <span className="text-xl text-white font-bold w-3">#{index}</span>
        <img
          className="imgExcluded"
          src={
            data.userImg ||
            "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s88-c-k-c0x00ffffff-no-rj"
          }
        />
        <div className="flex flex-col justify-center items-center text-white text-3xl mt-2">
          <p>{data.username || "MrBeast"}</p>
          {/* <p>{data.subcount}</p> */}
          <Odometer value={value} />
          <div className="flex w-full gap-20 mt-4">
            {/* total videos */}
            <div className="flex flex-col w-full gap-2 items-center text-xl">
              <span className="text-xl">Videos</span>
              <Odometer value={data.videos} />
            </div>
            {/* total views */}
            <div className="flex flex-col gap-2 items-center text-xl text-nowrap">
              <span className="text-xl">Views</span>
              <Odometer value={views} />
            </div>
            <div className="absolute bottom-6 flex justify-center p-4 animate-pulse">
              {id === "UCqECaJ8Gagnn7YCbPEzWH6g" ? (
                <div className="flex gap-2 items-center bg-red-500 rounded p-1 text-nowrap text-2xl text-white font-semibold px-8">
                  {/* <span className="text-xl text-white border-red-500 bg-blue-700 rounded p-1">
                    Taylor Swift
                  </span> */}
                  Gap: <Odometer value={value - diff} />
                  {/* <span className="text-xl border border-gray-500 bg-red-700 text-white rounded p-1">
                    UR . Cristiano
                  </span> */}
                </div>
              ) : (
                ""
              )}
              {/* <Odometer value={diff} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSubCountAll3D;
