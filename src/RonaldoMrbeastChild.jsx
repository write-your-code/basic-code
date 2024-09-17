// "use client";

import React, { useState, useEffect, useRef } from "react";
// import { getChannelDetailsB } from "../api/youtube-beast";
// import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import "./Live.css";
import axios from "axios";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import {
  ArrowUpRightIcon,
  EyeIcon,
  VideoCameraIcon,
} from "@heroicons/react/20/solid";
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
  const [views, setViews] = useState(0);

  const [diffSub, setDiffSub] = useState(0);
  // for border animation
  const boxRef = useRef(null);

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
      setViews(dataEst.table[0].count);
      //   setDiff && setDiff(dataEst.est_sub);
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
    const intervalId = setInterval(fetchStats, 100); // Fetch every 3 seconds
    // const timeoutId = setTimeout(() => setValue(data.subcount), 300);
    return () => {
      clearInterval(intervalId);
    }; // Clean up on unmount
  }, []);

  useEffect(() => {
    fetchChannelDetails();
  }, []);

  if (1) {
    return (
      <div className={`mb-[5px]  mr-[2px] shadow-xl w-full`}>
        <div
          className={`flex flex-col  bg-gradient-to-b from-orange-400 rounded-lg to-red-500 dark:from-orange-400:to-red-500 px-2 py-[1px] text-2xl items-center h-[450px] ${
            channelId === "UCtxD0x6AuNNqdXO9Wp5GHew" ? "box" : "box-1"
          }`}
        >
          <span className="text-sm font-bold w-3">{index}</span>
          <img
            src={
              channelId === "UCtxD0x6AuNNqdXO9Wp5GHew"
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiJeNH-7PtiMItH17Y0h4nZkWLViUbe1neL0gPRZyTkE4GKbIPogIgpPu_0cRcoMdnNUI&usqp=CAU"
                : data.userImg ||
                  "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s88-c-k-c0x00ffffff-no-rj"
            }
            alt=""
            className="w-[100%] h-[210px] object-cover"
          />
          <div className="flex flex-col justify-center items-center text-white text-4xl">
            <p>{data.username || "MrBeast"}</p>
            <div
              className={`w-[200px] h-[50px] overflow-hidden z-30 rounded ${
                channelId === "UCtxD0x6AuNNqdXO9Wp5GHew" ? "box" : "box-1"
              } p-2`}
            >
              {channelId === "UCX6OQ3DkcsbYNE6H8uQQuVA" ? (
                // https://socialcounts.org/youtube-live-subscriber-count/UCq-Fj5jknLsUf-MWSy4_brA/embed?odospeed=402&odoUpColor=rgba%2865%2C117%2C5%2C1%29&odoDownColor=rgba%28208%2C2%2C27%2C1%29
                // https://socialcounts.org/youtube-live-subscriber-count/UCq-Fj5jknLsUf-MWSy4_brA/embed?odospeed=402&odoUpColor=rgba%2865%2C117%2C5%2C1%29&odoDownColor=rgba%28208%2C2%2C27%2C1%29&style=.title%7Bcolor%3A+rgba%280%2C0%2C0%2C0%29%7Dbody%7Bbackground-color%3Argba%280%2C0%2C0%2C0%29%21important%7D.odoParrent%7Bcolor%3A+rgba%28255%2C255%2C255%2C1%29%7D
                // https://socialcounts.org/youtube-live-subscriber-count/UCq-Fj5jknLsUf-MWSy4_brA/embed?style=.odoParrent%7Bcolor%3A+rgba%28255%2C255%2C255%2C1%29%7D

                <iframe
                  height="90px"
                  width="320px"
                  frameborder="0"
                  src="https://socialcounts.org/youtube-live-subscriber-count/UCX6OQ3DkcsbYNE6H8uQQuVA/embed?style=.odoParrent%7Bcolor%3A+rgba%28255%2C255%2C255%2C1%29%7D"
                  // allowFullScreen
                  style={{ position: "relative", left: "-95px", top: "-50px" }}
                ></iframe>
              ) : (
                <iframe
                  height="90px"
                  width="320px"
                  frameborder="0"
                  src="https://socialcounts.org/youtube-live-subscriber-count/UCtxD0x6AuNNqdXO9Wp5GHew/embed?style=.odoParrent%7Bcolor%3A+rgba%28255%2C255%2C255%2C1%29%7D"
                  // allowFullScreen
                  style={{ position: "relative", left: "-93px", top: "-50px" }}
                ></iframe>
              )}
            </div>
            {/* <Odometer value={value} /> */}
            <div className="flex w-full gap-2 mt-4">
              {/* total videos */}
              <div className="flex flex-col w-full gap-2 items-center text-xl">
                <div className="flex gap-1 items-center">
                  <VideoCameraIcon className="w-4 h-4" />
                  <span className="text-xl"> Videos</span>
                </div>
                <Odometer value={data.videos || 814} />
              </div>
              {/* total views */}
              <div className="flex flex-col gap-2 items-center text-xl text-nowrap">
                <div className="flex gap-1 items-center">
                  <EyeIcon className="w-4 h-4" />
                  <span className="text-xl">Views</span>
                </div>
                <Odometer value={views || "58,502,276,448"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //   return (
  //     <div className="mb-[3px] w-[280px] h-[auto] relative">
  //       <div className="flex mr-1 px-1 py-[1px] text-xl items-center gap-2 isolate rounded-xl bg-white text-black shadow-lg ring-1 ring-black/5">
  //         <span className="text-sm font-bold w-6">#{index}</span>
  //         <img
  //           src={
  //             data.userImg ||
  //             "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s88-c-k-c0x00ffffff-no-rj"
  //           }
  //           alt=""
  //           className="w-[50px] h-[50px] border-2 border-red-500"
  //         />
  //         <div className="flex flex-col text-[1rem]">
  //           <div className="flex gap-2">
  //             <p className="text-nowrap text-md">{data.username || "MrBeast"}</p>

  //             <div
  //               className={`flex gap-[2px] text-[11px] ${
  //                 value - diff ? "bg-green-700" : "bg-red-600"
  //               } text-white absolute rounded justify-center items-center right-2 top-[1.6rem] p-1 h-4`}
  //             >
  //               <span className="">{value - diff ? "+" : "-"}</span>
  //               <Odometer value={value - diff} />
  //             </div>
  //           </div>
  //           {/* <p>{data.subcount}</p> */}
  //           <Odometer value={value} />
  //           {/* <div className="flex gap-1 items-center text-xs">
  //             <span className="text-xs">Gap</span>
  //             <Odometer value={value - diff} />
  //           </div> */}
  //         </div>
  //       </div>
  //     </div>
  //   );
};

export default LiveSubCountAll;
