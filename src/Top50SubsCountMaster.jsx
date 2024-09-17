import React, { useState, useEffect, useRef } from "react";
// import { getChannelDetails, getBeastDetails } from "./api/youtube";
// import { getChannelDetailsB } from "../api/youtube-beast";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import Odometer from "react-odometerjs";
import "./Live.css";
// import { ChannelListForTop50 } from "./data/ChannelList";
import "odometer/themes/odometer-theme-default.css";
import { ChannelListForTop50, top50Channels } from "./data/ChannelList";
import TwoChannelsFight from "./TwoChannelsFight";
const LiveSubCountAll = (
  {
    //   id,
    //   channelId,
    //   diff = 0,
    //   setDiff,
    //   setSubList,
    //   index,
    //   main = 0,
  }
) => {
  const [data, setData] = useState({});
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
  //   const fetchChannelDetails = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://api-v2.nextcounts.com/api/youtube/channel/${channelId}`
  //       );
  //       const data = response.data;
  //       console.log("data is: ", data);
  //       setData(data);
  //       return data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
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
    <>
      <TwoChannelsFight />
      <div
        className={`mb-[3px] w-[280px] h-[100vh] relative flex flex-wrap flex-col items-center gap-[2px] mt-[60px]`}
      >
        {top50Channels.map((channel) => (
          // 64 for ie and 59 for chrome
          // 17-9 => 54 was height width was auto for ie h=52.2 width=254
          <div className="h-[52.2px] w-[254px] overflow-hidden flex gap-0 bg-white justify-center items-center relative">
            <span
              className={`h-full w-[20px] text-[12px] font-medium px-[0px] pr-[0px] flex flex-col justify-center  items-center  ${
                // className={`h-full w-[34px] px-[4px] pr-[8px] flex flex-col justify-center  items-center  font-semibold ${
                Number(channel.id) === 1 ||
                Number(channel.id) === 2 ||
                Number(channel.id) === 3 ||
                channel.name === "UR · Cristiano"
                  ? "box-small"
                  : ""
              } `}
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
                  {/* <iframe
                    src="https://giphy.com/embed/GS2Acr2ShPMNrdsajU"
                    width="25"
                    height="25"
                    //   style=""
                    frameBorder="0"
                    className="giphy-embed bg-gray-100 rounded-full absolute top-4 left-24"
                    allowFullScreen
                  ></iframe> */}
                  <div className="absolute left-[85%] top-0 w-full h-full">
                    {/* <iframe
                    src="https://giphy.com/embed/WbiiOOb0SN9po32yMm"
                    width="50"
                    height="50"
                    //   style="position:absolute"
                    frameBorder="0"
                    className="giphy-embed object-contain"
                    allowFullScreen
                  ></iframe> */}
                    <iframe
                      src="https://giphy.com/embed/I911qr3QcRlGOd5pyJ"
                      width="50"
                      height="50"
                      // style=""
                      frameBorder="0"
                      className="giphy-embed object-contain"
                      allowFullScreen
                    ></iframe>
                  </div>
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
            <iframe
              height="90px"
              width="250px"
              // style={{
              //   height: "60px",
              //   overflow: "hidden",
              //   backgroundColor: "red",
              // }}
              frameborder="0"
              src={`https://socialcounts.org/youtube-live-subscriber-count/${channel.channelId}/embed?style=.odoParrent%7Bfont-size%3A18px%7Dbody%7Bbackground-color%3Argba%28255%2C255%2C255%2C1%29%21important%7D.title%7Bfont-size%3A20px%7D.odoParrent%7Bcolor%3A+rgba%280%2C0%2C0%2C1%29%7D.title%7Bcolor%3A+rgba%280%2C0%2C0%2C1%29%7D.title%7Bfont-size%3A16px%7D`}
              // src={`https://socialcounts.org/youtube-live-subscriber-count/${channel.channelId}/embed?style=.odoParrent%7Bfont-size%3A20px%7Dbody%7Bbackground-color%3Argba%2882%2C78%2C183%2C1%29%21important%7D.title%7Bfont-size%3A20px%7D.odoParrent%7Bcolor%3A+rgba%280%2C0%2C0%2C1%29%7D.title%7Bcolor%3A+rgba%280%2C0%2C0%2C1%29%7D`}
              // https://socialcounts.org/youtube-live-subscriber-count/UCq-Fj5jknLsUf-MWSy4_brA/embed?style=.title%7Bfont-size%3A18px%7D
              // https://socialcounts.org/youtube-live-subscriber-count/UCq-Fj5jknLsUf-MWSy4_brA/embed?style=.odoParrent%7Bfont-size%3A20px%7D.title%7Bfont-size%3A18px%7D/
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </>
  );
};
export default LiveSubCountAll;
