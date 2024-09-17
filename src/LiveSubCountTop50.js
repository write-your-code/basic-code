import React, { useState, useEffect, useRef } from "react";
import { getChannelDetails, getBeastDetails } from "./api/youtube";
// import { getChannelDetailsB } from "../api/youtube-beast";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
const LiveSubCountAll = ({
  id,
  channelId,
  diff = 0,
  setDiff,
  setSubList,
  index,
  main = 0,
}) => {
  const [data, setData] = useState({});
  const [value, setValue] = useState(0);
  const [diffSub, setDiffSub] = useState(0);
  // for border animation
  const boxRef = useRef(null);

  // useEffect(() => {
  //   const boxElement = boxRef.current;
  //   if (!boxElement) {
  //     return;
  //   }

  // const updateAnimation = () => {
  //   const angle =
  //     (parseFloat(boxElement.style.getPropertyValue("--angle")) + 0.5) % 360;
  //   boxElement.style.setProperty("--angle", `${angle}deg`);
  //   requestAnimationFrame(updateAnimation);
  // };

  //   requestAnimationFrame(updateAnimation);
  // }, []);
  const fetchStats = async () => {
    try {
      // const response = await axios.get(
      //   `https://api-v2.nextcounts.com/api/youtube/channel/${id}`
      // );
      const responseEstSub = await axios.get(
        `https://api.socialcounts.org/youtube-live-subscriber-count/${channelId}`
      );

      // const data = response.data;
      const dataEst = responseEstSub.data;
      console.log("estData is: ", dataEst);
      setValue(dataEst.est_sub);
      setDiff && setDiff(dataEst.est_sub);
      // setSubList &&
      //   setSubList((current) => {
      //     // add first
      //     current?.map((list, i) => {
      //       if (list.id === id) {
      //         list.subCount = dataEst.est_sub;
      //       }
      //     });

      //     current?.sort((a, b) => {
      //       return b - a;
      //     });
      //     console.log("sub list is:", current);
      //     return [...current, { id: id, subCount: dataEst.est_sub }];

      //     // return [...current];
      //   });
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchChannelDetails = async () => {
    try {
      const response = await axios.get(
        `https://api-v2.nextcounts.com/api/youtube/channel/${channelId}`
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
    const intervalId = setInterval(fetchStats, 10000); // Fetch every 3 seconds
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
      <div className="mb-[5px] w-[280px] mr-[2px] h-[300px] shadow-xl">
        <div
          className="flex flex-col  bg-gradient-to-b from-orange-400 rounded-lg to-red-500 dark:from-orange-400:to-red-500 px-2 py-[1px] text-2xl items-center h-[100%]"
          ref={boxRef}
          style={{
            "--angle": "0deg",
            "--border-color": "linear-gradient(var(--angle), #070707, #687aff)",
            "--bg-color": "linear-gradient(#131219, #131219)",
          }}
        >
          <span className="text-sm font-bold w-3">{index}</span>
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
                <Odometer value={data.viewcount} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mb-[3px] w-[280px] h-[auto] relative">
      <div className="flex mr-1 px-1 py-[1px] text-xl items-center gap-2 isolate rounded-xl bg-white text-black shadow-lg ring-1 ring-black/5">
        <span className="text-sm font-bold w-6">#{index}</span>
        <img
          src={
            data.userImg ||
            "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s88-c-k-c0x00ffffff-no-rj"
          }
          alt=""
          className="w-[50px] h-[50px] border-2 border-red-500"
        />
        <div className="flex flex-col text-[1rem]">
          <div className="flex gap-2">
            <p className="text-nowrap text-md">{data.username || "MrBeast"}</p>

            <div
              className={`flex gap-[2px] text-[11px] ${
                value - diff ? "bg-green-700" : "bg-red-600"
              } text-white absolute rounded justify-center items-center right-2 top-[1.6rem] p-1 h-4`}
            >
              <span className="">{value - diff ? "+" : "-"}</span>
              <Odometer value={value - diff} />
            </div>
          </div>
          {/* <p>{data.subcount}</p> */}
          <Odometer value={value} />
          {/* <div className="flex gap-1 items-center text-xs">
            <span className="text-xs">Gap</span>
            <Odometer value={value - diff} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LiveSubCountAll;
