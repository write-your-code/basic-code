import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import Odometer from "react-odometerjs";
import "./Live.css";
// import { ChannelListForTop50 } from "./data/ChannelList";
import "odometer/themes/odometer-theme-default.css";
import { ChannelListForTop50, top50Channels } from "./data/ChannelList";
import TwoChannelsFight from "./TwoChannelsFight";
import ImgComponent from "./Top50ImgComponent";
const LiveSubCountAll = ({
  id,
  channel,
  diff = 0,
  setDiff,
  setSubList,
  index,
  main = 0,
}) => {
  const [data, setData] = useState();
  const [value, setValue] = useState(0);
  const [diffSub, setDiffSub] = useState(0);
  const [views, setViews] = useState(0);

  const fetchStats = useCallback(async () => {
    try {
      // const response = await axios.get(
      //   `https://api-v2.nextcounts.com/api/youtube/channel/${id}`
      // );
      // const responseEstSub = await axios.get(
      //   `https://api.socialcounts.org/youtube-live-subscriber-count/${id}`
      const responseEstSub = await axios.get(`http://localhost:8000/api/${id}`);

      const dataEst = await responseEstSub.data;
      // console.log("est dtat is: ", responseEstSub);
      console.log("estData is: ", dataEst);
      setValue(dataEst.est_sub);
      setViews(dataEst.table[0].count);
      setDiff && setDiff(dataEst.est_sub);
      setSubList &&
        setSubList((current) => {
          // current.sort((a, b) => a.id - b.id);
          // current.filter((value, i) => current.indexOf(value) === i);
          // return [...current, dataEst.est_sub];
          current.map((c, i) => {
            if (c.channelId === id) {
              // return { ...c, subs: dataEst.est_sub };
              current[i] = { ...c, subs: dataEst.est_sub };
            }
          });
          return current;
        });
      // return [...current, dataEst.est_sub];
      // });
      return data;
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
  }, [value]);

  const fetchChannelDetails = useCallback(
    async () => {
      try {
        const response = await axios.get(
          // `https://api-v2.nextcounts.com/api/youtube/channel/${id}`
          `http://localhost:4000/api/data/${id}`
        );
        const data = response.data;
        if (data.username.length > 18)
          data.username = data.username.slice(0, 18);
        console.log("channel data is called: ", data);
        setData(data);
        // return data;
      } catch (error) {
        console.log(error);
      }
    },
    ["/api/youtube/channel"],
    [data],
    [id]
    // [data.username]
  );
  useEffect(() => {
    const intervalId = setInterval(fetchStats, 3000); // Fetch in 1 second
    return () => {
      clearInterval(intervalId);
    }; // Clean up on unmount
  }, []);

  useEffect(() => {
    fetchChannelDetails();
  }, []);
  return (
    <>
      {/* {top50Channels.map((channel) => ( */}
      {/* {data.map((channel) => ( */}
      <div className="relative">
        <div
          className="h-[48px] w-[260px] overflow-hidden flex gap-[0px] bg-cyan-50 justify-start items-start relative"
          // key={channel.chnnelId}
        >
          <span
            className={`h-full text-[14px] w-[30px] font-medium py-[0px] px-1 flex flex-col justify-center items-center overflow-hidden  ${
              channel.hot ? " box" : ""
            } `}
          >
            {channel.id}
            {channel.name === "UR · Cristiano" ? (
              <span>
                <iframe
                  src="https://giphy.com/embed/hxT02hhR7JpYiXiiqF"
                  width="40"
                  height="30"
                  //   style=""
                  // frameBorder="0"
                  className="giphy-embed"
                  allowFullScreen
                ></iframe>

                <div className="absolute left-[85%] top-0 w-full h-full">
                  <iframe
                    src="https://giphy.com/embed/I911qr3QcRlGOd5pyJ"
                    width="40"
                    height="40"
                    // style=""
                    frameBorder="0"
                    className="giphy-embed object-contain"
                    allowFullScreen
                  ></iframe>
                </div>
              </span>
            ) : Number(channel.id) === 1 ? (
              <>
                {/* // fire simple */}
                <iframe
                  src="https://giphy.com/embed/8FGMuS6Bj4MyP1NA5h"
                  width="60"
                  height="50"
                  //   style="position:absolute"
                  frameBorder="0"
                  className="giphy-embed absolute bottom-0 z-0"
                  allowFullScreen
                ></iframe>
                {/* medal */}
                <iframe
                  src="https://giphy.com/embed/FC2pAp4lTEtBIwBvP9"
                  width="40"
                  height="30"
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
                  height="30"
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
                  height="35"
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
            {channel.hot ? <span>🔥</span> : ""}
          </span>
          <ImgComponent channelId={channel.channelId} />
          <div className="flex flex-col w-full relative">
            <div className="absolute -top-[0px] left-[6px] z-10 flex flex-col w-full">
              <span className="text-nowrap text-sm text-gray-900">
                {channel.name}
              </span>
              <span>
                <Odometer value={value} />
              </span>
            </div>
          </div>
          {/* <div className="h-[25px] w-[130px] mt-3 overflow-hidden relative"> */}
          {/* <iframe
                    height="90px"
                    width="240px"
                    frameBorder="0"
                    src={`https://socialcounts.org/youtube-live-subscriber-count/${channel.channelId}/embed?style=.odoParrent%7Bfont-size%3A17px%7Dbody%7Bbackground-color%3Argba%28255%2C255%2C255%2C0%29%21important%7D.title%7Bfont-size%3A17px%7D.odoParrent%7Bcolor%3A+rgba%280%2C0%2C0%2C1%29%7D.title%7Bcolor%3A+rgba%280%2C0%2C0%2C1%29%7D.title%7Bfont-size%3A16px%7D`}
                    style={{
                      position: "absolute",
                      left: "-70px",
                      bottom: "-25px",
                    }}
                    // src={`https://socialcounts.org/youtube-live-subscriber-count/${channel.channelId}/embed?style=.odoParrent%7Bfont-size%3A20px%7Dbody%7Bbackground-color%3Argba%2882%2C78%2C183%2C1%29%21important%7D.title%7Bfont-size%3A20px%7D.odoParrent%7Bcolor%3A+rgba%280%2C0%2C0%2C1%29%7D.title%7Bcolor%3A+rgba%280%2C0%2C0%2C1%29%7D`}
                    // https://socialcounts.org/youtube-live-subscriber-count/UCq-Fj5jknLsUf-MWSy4_brA/embed?style=.title%7Bfont-size%3A18px%7D
                    // https://socialcounts.org/youtube-live-subscriber-count/UCq-Fj5jknLsUf-MWSy4_brA/embed?style=.odoParrent%7Bfont-size%3A20px%7D.title%7Bfont-size%3A18px%7D/
                    allowFullScreen
                  ></iframe> */}
          {/* <p>{data.subcount}</p> */}
          {/* </div>
          </div> */}
          {/* </div> */}
        </div>
        {/* giph for versus */}
        {channel.play && (
          <div className="absolute left-[50%] -top-[12px] w-full h-full flex z-50">
            <iframe
              src="https://giphy.com/embed/5SQLQog6IGzKyxQTnv"
              width="20"
              height="20"
              // style=""
              frameBorder="0"
              className="giphy-embed "
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      {/* ))} */}
    </>
  );
};
export default LiveSubCountAll;
