import React, { useState, useEffect, useRef } from "react";
// import { getChannelDetails, getBeastDetails } from "./api/youtube";
// import { getChannelDetailsB } from "../api/youtube-beast";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import Odometer from "react-odometerjs";
import "./Live.css";
// import { ChannelListForTop50 } from "./data/ChannelList";
import "odometer/themes/odometer-theme-default.css";
import {
  ChannelListForTop50,
  One2One,
  top50Channels,
} from "./data/ChannelList";
const ImgComponent = ({ channelId, old = false }) => {
  const [data, setData] = useState({});
  const [img, setImg] = useState();

  //   const fetchStats = async () => {
  //     try {
  //       // const response = await axios.get(
  //       //   `https://api-v2.nextcounts.com/api/youtube/channel/${id}`
  //       // );
  //       const responseEstSub = await axios.get(
  //         `https://api.socialcounts.org/youtube-live-subscriber-count/${channelId}`
  //       );

  //       // const data = response.data;
  //       const dataEst = responseEstSub.data;
  //       console.log("estData is: ", dataEst);
  //       setValue(dataEst.est_sub);
  //       setDiff && setDiff(dataEst.est_sub);
  //       // setSubList &&
  //       //   setSubList((current) => {
  //       //     // add first
  //       //     current?.map((list, i) => {
  //       //       if (list.id === id) {
  //       //         list.subCount = dataEst.est_sub;
  //       //       }
  //       //     });

  //       //     current?.sort((a, b) => {
  //       //       return b - a;
  //       //     });
  //       //     console.log("sub list is:", current);
  //       //     return [...current, { id: id, subCount: dataEst.est_sub }];

  //       //     // return [...current];
  //       //   });
  //       return data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  const fetchChannelDetails = async () => {
    try {
      const response = await axios.get(
        `https://api-v2.nextcounts.com/api/youtube/channel/${channelId}`
      );
      const data = response.data;
      // console.log("data is: ", data);
      setImg(data.userImg);
      return;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // const intervalId = setInterval(fetchStats, 10000); // Fetch every 3 seconds
    // const timeoutId = setTimeout(() => setValue(data.subcount), 300);
    // return () => {
    //   clearInterval(intervalId);
    // }; // Clean up on unmount
  }, []);

  useEffect(() => {
    fetchChannelDetails();
  }, []);

  return old ? (
    <img
      src={
        img ||
        "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s88-c-k-c0x00ffffff-no-rj"
      }
      alt={"img"}
      className="object-contain card"
    />
  ) : (
    <img
      src={
        img ||
        "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s88-c-k-c0x00ffffff-no-rj"
      }
      alt={"img"}
      className="h-[50px] w-[50px] object-contain"
    />
  );
};
export default ImgComponent;
