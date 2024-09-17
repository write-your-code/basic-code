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
import ImgComponent from "./Top50ImgComponent";
const TwoChannelsFight = () => {
  const [data, setData] = useState({});
  const [img, setImg] = useState();
  const [value, setValue] = useState(0);
  const [diffSub, setDiffSub] = useState(0);

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
  const fetchChannelDetails = async (channelId) => {
    try {
      const response = await axios.get(
        `https://api-v2.nextcounts.com/api/youtube/channel/${channelId}`
      );
      const data = response.data;
      console.log("data is: ", data);
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
    // fetchChannelDetails();
  }, []);

  return (
    <div
      className={`mb-[0px] flex items-center justify-center gap-[0px] fixed overflow-hidden z-10 top-0 w-full bg-black`}
    >
      {One2One.map((channel, i) => (
        // 64 for ie and 59 for chrome
        <div
          className={`h-[59px] flex gap-0 items-center relative  bg-white overflow-hidden ${
            i === 2 ? "flex-row-reverse" : ""
          }`}
        >
          {/* vs iframe */}
          {channel.id === "0" ? (
            <div className="flex flex-col justify-center items-center">
              <iframe
                src="https://giphy.com/embed/zN6RJRfeOtYbbmHhkp"
                width="65"
                height="45"
                // style=""
                frameBorder="0"
                className="giphy-embed absolute -top-1 left-[0px] z-10"
                allowFullScreen
              ></iframe>
              <div className="overflow-hidden w-[92px] h-[60px] bg-[#BD10E0]">
                <iframe
                  height="90px"
                  width="300px"
                  frameborder="0"
                  src={`https://socialcounts.org/compare/youtube-live-subscriber-count/${One2One[0].channelId}/youtube-live-subscriber-count/${One2One[2].channelId}/embed?style=body%7Bbackground-color%3Argba%28189%2C16%2C224%2C1%29%21important%7D.odoParrent%7Bcolor%3A+rgba%28255%2C255%2C255%2C1%29%7D`}
                  style={{ position: "relative", left: "-120px", top: "10px" }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ) : (
            <>
              <span
                className={`w-[30px] h-[59px] px-[4px] pr-[8px] flex flex-col justify-center  items-center  font-semibold box-small`}
              >
                {channel.id}
                {channel.name === "UR · Cristiano" ? (
                  <span>
                    {/* 🔥 */}
                    {/* <iframe
                  src="https://giphy.com/embed/amI9hdIQsZMtCiQWOq"
                  width="30"
                  height="30"
                  //   style=""
                  frameBorder="0"
                  className="giphy-embed"
                  allowFullScreen
                ></iframe> */}
                    {/* <iframe
                  //   src="https://giphy.com/embed/xUA7aO3740serwGGze"
                  //   src="https://giphy.com/embed/uB6eLycBCOl68"
                  src="https://giphy.com/embed/azIFf7xDt1YEiY2Wlo"
                  width="30"
                  height="30"
                  //   style=""
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe> */}
                    <iframe
                      src="https://giphy.com/embed/hxT02hhR7JpYiXiiqF"
                      width="40"
                      height="40"
                      //   style=""
                      frameBorder="0"
                      className="giphy-embed"
                      allowFullScreen
                    ></iframe>
                    <iframe
                      src="https://giphy.com/embed/GS2Acr2ShPMNrdsajU"
                      width="25"
                      height="25"
                      //   style=""
                      frameBorder="0"
                      className="giphy-embed bg-gray-100 rounded-full absolute top-4 left-24"
                      allowFullScreen
                    ></iframe>
                  </span>
                ) : Number(channel.id) === 1 ? (
                  <>
                    {/* <iframe
                  src="https://giphy.com/embed/2h2BsbOPzgE2pWaDDg"
                  width="30"
                  height="30"
                  // style=""
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe> */}
                    {/* // fire simple */}
                    <iframe
                      src="https://giphy.com/embed/8FGMuS6Bj4MyP1NA5h"
                      width="60"
                      height="60"
                      //   style="position:absolute"
                      frameBorder="0"
                      className="giphy-embed absolute bottom-0 z-0"
                      allowFullScreen
                    ></iframe>
                    {/* medal */}
                    <iframe
                      src="https://giphy.com/embed/FC2pAp4lTEtBIwBvP9"
                      width="40"
                      height="40"
                      // style=""
                      frameBorder="0"
                      className="giphy-embed object-contain z-10"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute left-[80%] top-0 w-full h-full flex">
                      <iframe
                        src="https://giphy.com/embed/nAWf5E1Ua00S6T8vYn"
                        width="60"
                        height="60"
                        // style=""
                        frameBorder="0"
                        className="giphy-embed "
                        allowFullScreen
                      ></iframe>
                    </div>
                  </>
                ) : Number(channel.id) === 2 ? (
                  <>
                    <iframe
                      src="https://giphy.com/embed/ihqEd7BQiXCdeaHhnA"
                      width="80"
                      height="45"
                      // style=""
                      frameBorder="0"
                      className="giphy-embed object-fill z-10"
                      allowFullScreen
                    ></iframe>
                    <iframe
                      src="https://giphy.com/embed/26BRIYJNRAreymGwE"
                      width="40"
                      height="40"
                      //   style=""
                      frameBorder="0"
                      className="giphy-embed absolute bottom-0 z-0"
                      allowFullScreen
                    ></iframe>
                  </>
                ) : Number(channel.id) === 3 ? (
                  <>
                    <iframe
                      src="https://giphy.com/embed/WQUOVbO1auORy4N0f0"
                      width="70"
                      height="45"
                      // style=""
                      frameBorder="0"
                      className="giphy-embed object-fill z-10"
                      allowFullScreen
                    ></iframe>
                    <iframe
                      src="https://giphy.com/embed/26BRxthqtPxuu8dtC"
                      width="40"
                      height="40"
                      //   style=""
                      frameBorder="0"
                      className="giphy-embed absolute bottom-0"
                      allowFullScreen
                    ></iframe>
                  </>
                ) : (
                  ""
                )}
              </span>
              <div className="mx-0 px-0 w-[80px]">
                <ImgComponent channelId={channel.channelId} />
              </div>
              <div className="overflow-hidden relative w-[140px]">
                <iframe
                  height="90px"
                  width="200px"
                  style={{
                    // height: "60px",
                    position: "relative",
                    left: "-60px",
                    top: "0",
                    overflow: "hidden",
                    backgroundColor: "red",
                  }}
                  frameborder="0"
                  src={`https://socialcounts.org/youtube-live-subscriber-count/${channel.channelId}/embed?style=.odoParrent%7Bfont-size%3A18px%7Dbody%7Bbackground-color%3Argba%28189%2C16%2C224%2C1%29%21important%7D.title%7Bfont-size%3A20px%7D.odoParrent%7Bcolor%3A+rgba%280%2C0%2C0%2C1%29%7D.title%7Bcolor%3A+rgba%28255%2C255%2C255%2C1%29%7D.odoParrent%7Bcolor%3A+rgba%28255%2C255%2C255%2C1%29%7D`}
                  // src={`https://socialcounts.org/youtube-live-subscriber-count/${channel.channelId}/embed?style=.odoParrent%7Bfont-size%3A20px%7Dbody%7Bbackground-color%3Argba%2882%2C78%2C183%2C1%29%21important%7D.title%7Bfont-size%3A20px%7D.odoParrent%7Bcolor%3A+rgba%280%2C0%2C0%2C1%29%7D.title%7Bcolor%3A+rgba%280%2C0%2C0%2C1%29%7D`}
                  allowFullScreen
                ></iframe>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
export default TwoChannelsFight;
