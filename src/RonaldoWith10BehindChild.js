import React, { useState, useEffect, useRef } from "react";
import { getChannelDetails, getBeastDetails } from "./api/youtube";
// import { getChannelDetailsB } from "../api/youtube-beast";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-car.css";
const LiveSubCountAll3D = ({
  id,
  diff = 0,
  setDiff,
  setSubList,
  index,
  main = 0,
  rank,
  setRank,
}) => {
  const [data, setData] = useState({});
  const [value, setValue] = useState(0);
  const [views, setViews] = useState(0);
  const [diffSub, setDiffSub] = useState(0);
  // for border animation

  const fetchStats = async () => {
    try {
      const responseEstSub = await axios.get(
        `https://api.socialcounts.org/youtube-live-subscriber-count/${id}`
      );

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
      if (id === "UCtxD0x6AuNNqdXO9Wp5GHew") setRank(index);

      return data;
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
      if (data.username.length > 18) data.username = data.username.slice(0, 18);
      setData(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(fetchStats, 300); // Fetch every 3 seconds
    return () => {
      clearInterval(intervalId);
    }; // Clean up on unmount
  }, []);

  useEffect(() => {
    fetchChannelDetails();
  }, []);
  return (
    <div className="flex flex-col mx-1 bg-gradient-to-b bg-black border-2 border-gray-100 rounded-lg px-0 text-xl items-center justify-start pb-1 h-[250px] relative mt-[10px] overflow-hidden">
      <span className="text-md text-white font-bold">{index}</span>
      <img
        className="w-full h-[120px] object-contain"
        src={
          data.userImg ||
          "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s88-c-k-c0x00ffffff-no-rj"
        }
      />
      <div className="flex flex-col justify-center items-center text-white text-xl mt-[5px]">
        <p className="text-lg px-2 whitespace-nowrap">
          {data.username || "MrBeast"}
        </p>
        {/* subscribers */}
        <Odometer value={value} />
        {/*videos and  views*/}
        <div className="flex justify-center w-full gap-2 mt-2">
          {/* total videos */}
          {/* <div className="flex flex-col w-full gap-2 items-center text-xl">
            <span className="text-xl">Videos</span>
            <Odometer value={data.videos} />
          </div> */}
          {/* total views */}
          {/* <div className="flex flex-col gap-1 items-center text-sm text-nowrap">
            <span className="text-sm">Views</span>
            <Odometer value={views} />
          </div> */}
        </div>
        {/* gap */}
        <div className="absolute bottom-0 w-full flex justify-center items-center">
          {id !== "UCtxD0x6AuNNqdXO9Wp5GHew" ? (
            <div
              className={`flex gap-2 items-center justify-center ${
                value - diff > 0
                  ? " bg-green-700"
                  : "bg-red-700 flex-row-reverse"
              } p-1 text-nowrap text-[17px] text-white font-semibold px-8 w-full relative`}
            >
              <img
                src={data.userImg}
                alt=""
                className="w-8 h-8 border-2 border-white rounded-full"
              />
              <span className="text-[10px] absolute -top-[8px] flex gap-1 z-50">
                <span className="text-[8px]">#{index}</span>
                <span className="">Gap</span>
                <span className="text-[8px]">#{rank}</span>
              </span>
              <Odometer value={value - diff} />
              <img
                src="https://yt3.ggpht.com/yKfa-GV-v_O-6jZKHwBuc2FX0Q5ths8OqYTOAmOwzVY0q3miZT0L-rUzve-M2QBdONcTYaEO_JI=s800-c-k-c0x00ffffff-no-rj"
                alt=""
                className="w-8 h-8 border-2 border-white rounded-full"
              />
            </div>
          ) : (
            ""
          )}
        </div>
        {/* giph for ronaldo */}
        {id === "UCtxD0x6AuNNqdXO9Wp5GHew" ? (
          <div className="absolute top-1 right-0 w-full flex justify-between z-30 px-2">
            {/* <iframe
                src="https://giphy.com/embed/8FGMuS6Bj4MyP1NA5h"
                width="60"
                height="60"
                //   style="position:absolute"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
              ></iframe> */}
            <iframe
              src="https://giphy.com/embed/2h2BsbOPzgE2pWaDDg"
              width="40"
              height="40"
              // style=""
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://giphy.com/embed/GS2Acr2ShPMNrdsajU"
              width="40"
              height="40"
              //   style=""
              frameBorder="0"
              className="giphy-embed bg-gray-100 rounded-full"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LiveSubCountAll3D;
