import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./App.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import LiveSubCountAll from "./LiveSubCountNextCount";
import Child from "./RonaldoWithAboveAllChild";
// import Child from "./RonaldoWith10BehindChildWithRQ";
import Counter from "./counter";
import { newsRonaldo, top50Channels } from "./data/ChannelList";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import TwoChannelsFight from "./TwoChannelsFight";
import ThreeChannelsFight from "./ThreeChannelsFightAuto";

// intilize react-query
export default function LiveSubThree() {
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
        Number(channel.id) <=
        Number(ronaldoRank) + 4
        // Number(channel.id) <= Number(ronaldoRank)
      )
        return channel;
      // if (
      //   Number(channel.id) <= Number(ronaldoRank) + 1 &&
      //   Number(channel.id) >= Number(ronaldoRank)
      // )
      // return channel;
      // else return;
    });
    console.log(newData);
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
      <div className="flex flex-col flex-wrap w-full h-screen">
        {dataArray.map((channel, i) => (
          // <SwiperSlide>
          // <QueryClientProvider client={queryClient}>
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
          // </QueryClientProvider>
          // </SwiperSlide>
        ))}
      </div>
    </>
  );
}
