import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";

// import required modules
import Child from "./RonaldoWithAbove2Behind2Child";
import MiddleComponent from "./RonaldoAbove2Behind2MiddleComponent";
// import Child from "./RonaldoWith10BehindChildWithRQ";
import Counter from "./counter";
import { newsRonaldo, top50Channels } from "./data/ChannelList";

// intilize react-query
export default function R10Behind10Above() {
  // const queryClient = new QueryClient();
  const [diff, setDiff] = useState(0);
  const [dataArray, setDataArray] = useState([]);
  const [opponenetImages, setOpponenetImages] = useState([]);

  const [rank, setRank] = useState(() => {
    top50Channels.filter((channel) => {
      if (channel.name === "UR · Cristiano") return channel;
      return 0;
    });
  });

  // let ronaldoRank= 0 ;

  let ronaldoRank = 0;
  const getRank = () => {
    top50Channels.map((channel) => {
      if (channel.name === "UR · Cristiano") ronaldoRank = channel.id;
    });
    setRank(ronaldoRank);
    const newData = top50Channels.filter((channel) => {
      if (
        Number(channel.id) >= Number(ronaldoRank) - 3 &&
        Number(channel.id) <= Number(ronaldoRank)
      )
        return channel;
      if (
        Number(channel.id) <= Number(ronaldoRank) + 2 &&
        Number(channel.id) >= Number(ronaldoRank)
      )
        return channel;
      // else return;
    });
    console.log("data returned:", newData);
    console.log("Rank", rank);
    setDataArray(newData);
  };
  useEffect(() => {
    getRank();
  }, []);
  // let rank = 38;
  return (
    <>
      {/* <ThreeChannelsFight /> */}
      <div className="flex flex-col gap-2 flex-wrap justify-center  items-center h-screen">
        {dataArray.map((channel, i) =>
          i + 1 >= 3 && i + 1 <= 4 ? (
            <MiddleComponent
              key={channel.id}
              id={channel.channelId}
              diff={diff}
              setDiff={setDiff}
              // setSubList={setSubList}
              // index={i === 1 ? 56 : rank++}
              index={channel.id}
              main={1}
              rank={rank || 0}
              setRank={setRank}
              opponenetImages={opponenetImages}
              setOpponenetImages={setOpponenetImages}
            />
          ) : (
            // />
            <Child
              //   id={"UCtxD0x6AuNNqdXO9Wp5GHew"}
              key={channel.id}
              id={channel.channelId}
              diff={diff}
              setDiff={setDiff}
              // setSubList={setSubList}
              // index={i === 1 ? 56 : rank++}
              index={channel.id}
              main={1}
              rank={rank || 0}
              setRank={setRank}
              opponenetImages={opponenetImages}
              setOpponenetImages={setOpponenetImages}
            />
          )
        )}
      </div>
    </>
  );
}
