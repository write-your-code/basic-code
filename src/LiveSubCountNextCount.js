import React, { useState, useEffect, useRef } from "react";
import { getChannelDetails, getBeastDetails } from "./api/youtube";
import { getChannelDetailsB } from "./api/youtube-beast";
import {
  ArrowDownIcon,
  ArrowDownRightIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/20/solid";
import "./Live.css";
import axios from "axios";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
const LiveSubCountAll = ({
  id,
  diff = 0,
  setDiff,
  setSubList,
  index,
  main = 0,
}) => {
  const [data, setData] = useState({});
  const [value, setValue] = useState(0);
  const [diffSub, setDiffSub] = useState(0);
  const [views, setViews] = useState(0);

  const fetchStats = async () => {
    try {
      // const response = await axios.get(
      //   `https://api-v2.nextcounts.com/api/youtube/channel/${id}`
      // );
      // const responseEstSub = await axios.get(
      //   `https://api.socialcounts.org/youtube-live-subscriber-count/${id}`
      // );
      const responseEstSub = await axios.get(
        `https://rappid.in/apis/youyube/live_count.php?channel_id=${id}`
        // headers: {
        //   "Access-Control-Allow-Origin": "*",
        //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        //   "Access-Control-Allow-Headers":
        //     "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
        //   "Content-Type": "application/json",
        // },
        // withCredentials: false,
      );
      // const responseEstSub = await axios.create({
      //   method: "get",
      //   url: `https://rappid.in/apis/youyube/live_count.php?channel_id=${id}`,
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      //     "Access-Control-Allow-Headers":
      //       "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
      //     "Content-Type": "application/json",
      //   },
      //   withCredentials: false,
      // });
      // axios.create({
      //   baseURL: `https://rappid.in/apis/youyube/live_count.php?channel_id=${id}`,
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     "Content-Type": "application/json",
      //   },
      //   // withCredentials: false,
      // });
      // const responseEstSub = axios.get();
      // const data = response.data;
      const dataEst = await responseEstSub.data;
      // console.log("est dtat is: ", responseEstSub);
      console.log("estData is: ", dataEst);
      setValue(dataEst.est_sub);
      setViews(dataEst.table[0].count);
      setDiff && setDiff(dataEst.est_sub);
      // setSubList &&
      //   setSubList((current) => {
      //     current.sort((a, b) => {
      //       return b - a;
      //     });
      //     current.filter((value, i) => current.indexOf(value) === i);
      //     return [...current, dataEst.est_sub];
      //   });
      return data;
      // return {
      //   subscriberCount: data.statistics.subscriberCount,
      //   channelName: data.snippet.title,
      //   profilePicture: data.snippet.thumbnails.default.url,
      // };
    } catch (error) {
      if (error.response) {
        // The server responded with a status code outside the 2xx range
        console.log("Error response:", error.response);
      } else if (error.request) {
        // The request was made but no response was received
        console.log("Error request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.log("Error message:", error.message);
      }
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

  if (main) {
    return (
      <div className="mb-[5px] w-[276px] mr-[2px] h-[430px] shadow-xl box">
        <div className="flex flex-col  bg-gradient-to-b from-orange-400 rounded-lg to-red-500 bg-black dark:from-orange-400:to-red-500 px-2 py-[1px] text-2xl items-center h-[100%] animate-pulse">
          <span className="text-lg font-bold w-3">{index}</span>
          <img
            src={data.userImg}
            alt=""
            className="w-[100%] h-[210px] object-cover border-2 border-red-500"
          />
          <div className="flex flex-col justify-center items-center text-white text-4xl">
            <p>{data.username}</p>
            {/* <p>{data.subcount}</p> */}
            <Odometer value={value} />
            <div className="flex w-full gap-2 mt-4">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mb-[1px] w-[285px] h-[86px]">
      <div className="flex mr-1 bg-slate-100 px-1 rounded py-[1px] text-xl items-center gap-2">
        <span className="text-sm font-bold w-3">new.{index}</span>
        <img
          src={
            data.userImg ||
            "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s88-c-k-c0x00ffffff-no-rj"
          }
          alt=""
          className="w-[80px] h-[80px] border-2 border-red-500"
        />
        <div className="">
          <p className="text-nowrap">{data.username || "MrBeast"}</p>
          {/* <p>{data.subcount}</p> */}
          <Odometer value={value} />
          <div
            className={`flex gap-1 items-center text-sm text-white px-1 rounded max-w-full w-[150px] ${
              value - diff ? "bg-green-600" : "bg-red-700"
            }`}
          >
            {value - diff ? (
              <ArrowUpIcon className="h-3 w-3 text-white animate-bounce" />
            ) : (
              <ArrowDownIcon className="h-3 w-3 text-white animate-bounce" />
            )}
            <span className="text-sm">Gap:</span>
            <Odometer value={value - diff} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSubCountAll;
