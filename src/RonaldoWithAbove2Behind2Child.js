import React, { useState, useEffect, useRef } from "react";
import { getChannelDetails, getBeastDetails } from "./api/youtube";
// import { getChannelDetailsB } from "../api/youtube-beast";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-minimal.css";
const LiveSubCountAll3D = ({
  id,
  diff = 0,
  setDiff,
  setSubList,
  index,
  main = 0,
  rank,
  setRank,
  opponenetImages,
  setOpponenetImages,
}) => {
  const [data, setData] = useState({});
  const [value, setValue] = useState(0);
  const [views, setViews] = useState(0);
  const [diffSub, setDiffSub] = useState(0);
  // const [opponenetImages, setOpponenetImages] = useState([]);
  // for border animation
  let ronaldoChannelId = "UCtxD0x6AuNNqdXO9Wp5GHew";
  const fetchStats = async () => {
    try {
      const responseEstSub = await axios.get(
        `https://api.socialcounts.org/youtube-live-subscriber-count/${id}`
      );

      const dataEst = responseEstSub.data;
      // console.log("estData is: ", dataEst);
      setValue(dataEst.est_sub);
      // setViews(dataEst.table[0].count);
      if (id === "UCtxD0x6AuNNqdXO9Wp5GHew") {
        setDiff && setDiff(dataEst.est_sub);
      }
      // setSubList &&
      //   setSubList((current) => {
      //     current.sort((a, b) => {
      //       return b - a;
      //     });
      //     current.filter((value, i) => current.indexOf(value) === i);
      //     return [...current, dataEst.est_sub];
      //   });
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
      if (id !== "UCtxD0x6AuNNqdXO9Wp5GHew") {
        setOpponenetImages((current) => [
          ...current,
          { ...response.data, id: index },
        ]);
      }
      if (opponenetImages.length > 0) {
        // sort images
        opponenetImages.sort((a, b) => a.id - b.id);
        // remove duplicates
        const mapFromImages = new Map(opponenetImages.map((c) => [c.id, c]));

        const uniqueImages = [...mapFromImages.values()];

        setOpponenetImages((current) => uniqueImages);
        console.log("images", opponenetImages);
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // const intervalId = setInterval(fetchStats, 300); // Fetch every 3 seconds
    fetchStats(); // Fetch every 3 seconds
    // if (opponenetImages.length > 0) {
    //   // sort images
    //   opponenetImages.sort((a, b) => a.id - b.id);
    //   // remove duplicates
    //   const mapFromImages = new Map(opponenetImages.map((c) => [c.id, c]));

    //   const uniqueImages = [...mapFromImages.values()];

    //   setOpponenetImages((current) => uniqueImages);
    //   console.log("images in useeffect", opponenetImages);
    // }

    // console.log("images", opponenetImages);
    return () => {
      // clearInterval(intervalId);
    }; // Clean up on unmount
  }, []);

  useEffect(() => {
    fetchChannelDetails();
  }, []);
  return (
    // h-[96] for chrome
    // h-[100] for ie
    // w-[210] for chrome
    // w-[200] for ie
    <div
      className={`flex mx-[1px] bg-gradient-to-b bg-[#1e1e1e] text-md mb-[2px] border pb-[40px] h-[120px] w-[240px] relative overflow-hidden rounded ${
        value - diff > 0
          ? " border-green-700"
          : "border-red-700 flex-row-reverse"
      }`}
      key={id}
    >
      <div className="flex items-center justify-center gap-2 px-2">
        <span className="text-sm text-white font-neutral">{index}</span>
        <div className="flex items-center">
          <img
            className="w-[60px] h-[60px] rounded-full object-contain"
            src={
              data.userImg ||
              "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s88-c-k-c0x00ffffff-no-rj"
            }
          />
          <div className="flex flex-col justify-start items-start text-white text-md mt-[1px]">
            <p className="text-[1rem] px-2 whitespace-nowrap">
              {data.username || "MrBeast"}
            </p>
            {/* subscribers */}
            {/* <Odometer value={value} /> */}
            <div className="h-[20px] w-[130px] mt-0 overflow-hidden relative">
              <iframe
                height="90px"
                width="240px"
                // frameborder="0"
                src={`https://socialcounts.org/youtube-live-subscriber-count/${id}/embed?style=.odoParrent%7Bfont-size%3A18px%7Dbody%7Bbackground-color%3Argba%28255%2C255%2C255%2C0%29%21important%7D.title%7Bfont-size%3A20px%7D.odoParrent%7Bcolor%3A+rgba%28255%2C255%2C255%2C1%29%7D.title%7Bcolor%3A+rgba%280%2C0%2C0%2C1%29%7D.title%7Bfont-size%3A16px%7D`}
                style={{
                  position: "absolute",
                  left: "-70px",
                  bottom: "-25px",
                }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/*videos and  views*/}

          {/* gap */}
          <div className="absolute bottom-0 left-0 w-full flex justify-center items-center">
            {id !== "UCtxD0x6AuNNqdXO9Wp5GHew" ? (
              <div
                className={`flex gap-0 items-center justify-center ${
                  value - diff > 0
                    ? " bg-green-700"
                    : "bg-red-700 flex-row-reverse"
                } pt-[7px] pb-[2px] text-nowrap text-[17px] text-white font-semibold px-2 w-full relative`}
              >
                <img
                  src={data.userImg}
                  alt=""
                  className={`w-7 h-7 border-2 border-white rounded-full ${
                    value - diff > 0 ? "-mr-[2px]" : "-ml-[2px]"
                  }`}
                />

                <span
                  className={`text-[10px] absolute -top-[2px] flex gap-1 z-50 ${
                    value - diff > 0 ? "" : "flex-row-reverse"
                  }`}
                >
                  <span className="text-[8px]">#{index}</span>
                  <span className="uppercase">Gap</span>
                  <span className="text-[8px]">#{rank}</span>
                </span>
                {/* difference */}
                <div
                  className="overflow-hidden w-[110px] h-[20px] z-500 rounded"
                  // id="diff"
                >
                  <iframe
                    className="transition ease-in-out delay-50 hover:-translate-x-1 hover:scale-110 duration-200"
                    height="60px"
                    width="340px"
                    // frameborder="0"
                    src={`https://socialcounts.org/compare/youtube-live-subscriber-count/${id}/youtube-live-subscriber-count/${ronaldoChannelId}/embed?style=body%7Bbackground-color%3Argba%28255%2C255%2C255%2C1%29%21important%7D
                  .compareId_difference%7Bcolor%3Argba%28255%2C255%2C255%2C1%29%21important%7D`}
                    style={{
                      position: "relative",
                      left: "-100px",
                      bottom: "20px",
                    }}
                    allowFullScreen
                  ></iframe>
                </div>
                {/*  */}
                {/* <Odometer value={value - diff} /> */}
                <img
                  src="https://yt3.ggpht.com/yKfa-GV-v_O-6jZKHwBuc2FX0Q5ths8OqYTOAmOwzVY0q3miZT0L-rUzve-M2QBdONcTYaEO_JI=s800-c-k-c0x00ffffff-no-rj"
                  alt=""
                  className={`w-7 h-7 border-2 border-white rounded-full ${
                    value - diff > 0 ? "-ml-[2px]" : "-mr-[2px]"
                  }`}
                />
              </div>
            ) : id === "UCtxD0x6AuNNqdXO9Wp5GHew" ? (
              opponenetImages.map((opponent, i) =>
                opponent.id < index && i <= 6 ? (
                  <img
                    src={opponent.userImg}
                    alt=""
                    key={i}
                    className="w-8 h-8 border-2 border-white rounded-full"
                  />
                ) : (
                  ""
                )
              )
            ) : (
              ""
            )}
          </div>
          {/* giph for ronaldo */}
          {id === "UCtxD0x6AuNNqdXO9Wp5GHew" ? (
            <div className="absolute bottom-1 right-0 w-full h-full flex justify-between items-end z-30 px-2">
              <iframe
                src="https://giphy.com/embed/2h2BsbOPzgE2pWaDDg"
                width="40"
                height="40"
                // style=""
                // frameBorder="0"
                className="giphy-embed"
                allowFullScreen
              ></iframe>
              <iframe
                src="https://giphy.com/embed/GS2Acr2ShPMNrdsajU"
                width="40"
                height="40"
                //   style=""
                // frameBorder="0"
                className="giphy-embed rounded-full"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveSubCountAll3D;
