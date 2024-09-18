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
import Child from "./RonaldoWith10BehindChild";
import Counter from "./counter";
import { top50Channels } from "./data/ChannelList";

export default function LiveSubThree() {
  const [diff, setDiff] = useState(0);
  const [dataArray, setDataArray] = useState([]);
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
        Number(channel.id) > Number(ronaldoRank) - 10 &&
        Number(channel.id) <= Number(ronaldoRank)
      )
        return channel;
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
      <div className="grid grid-cols-5 w-full h-full mt-[70px]">
        {dataArray.map((channel, i) => (
          // <SwiperSlide>
          <Child
            //   id={"UCtxD0x6AuNNqdXO9Wp5GHew"}
            id={channel.channelId}
            diff={diff}
            setDiff={setDiff}
            // setSubList={setSubList}
            // index={i === 1 ? 56 : rank++}
            index={channel.id}
            main={1}
            rank={rank || 0}
            setRank={setRank}
          />
          // </SwiperSlide>
        ))}
      </div>
      {/* </Swiper> */}
      <div className="absolute top-0 right-0 rounded-r-xl rounded-l-xl">
        <Counter />
      </div>
    </>
  );
}
