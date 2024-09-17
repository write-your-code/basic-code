// "use client";
import React, { useState, useEffect } from "react";
// import { getChannelDetails, getBeastDetails } from "./api/youtube";

import Counter from "./counter";
import LiveCounter from "./RonaldoMrbeastChild";
// import LiveSubCountTop50 from "./LiveSubCountTop50";
// import LiveSubCountAll3D from "./LiveSubCountNextCount3D";
import "./Live.css";
const LiveCount = () => {
  const data = ["UCX6OQ3DkcsbYNE6H8uQQuVA", "UCtxD0x6AuNNqdXO9Wp5GHew"];
  const dataSecond = [
    "UC56gTxNs4f9xZ7Pa2i5xNzg",
    "UCgFXm4TI8htWmCyJ6cVPG_A",
    "UC3gNmTGu-TTbFPpfSs5kNkg",
    "UCRijo3ddMTht_IHyNSNXpNQ",
  ];
  const [channelDetails, setChannelDetails] = useState({
    subscriberCount: null,
    channelName: "",
    profilePicture: "",
  });

  const [beastDetails, setBeastDetails] = useState({
    subscriberCount: null,
    channelName: "",
    profilePicture: "",
  });

  return (
    <div className="text-xl flex width-[100%] px-0">
      <div className="w-1/5 overflow-hidden">
        <div className="flex flex-col gap-[0.0px] bg-black">
          <iframe
            height="89.5px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UCq-Fj5jknLsUf-MWSy4_brA/embed"
            allowFullScreen
          ></iframe>
          <iframe
            height="89.5px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UCbCmjCuTUZos6Inko4u57UQ/embed"
            allowFullScreen
          ></iframe>
          <iframe
            height="89.5px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UCpEhnqL0y41EpW2TvWAHD7Q/embed"
            allowFullScreen
          ></iframe>
          <iframe
            height="89.5px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UCk8GzjMOrta8yxDcKfylJYw/embed"
            allowFullScreen
          ></iframe>
          <iframe
            height="89.5px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UCvlE5gTbOvjiolFlEm-c_Ow/embed"
            allowFullScreen
          ></iframe>
          <iframe
            height="89.5px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UCJplp5SjeGSdVdwsfb9Q7lQ/embed"
            allowFullScreen
          ></iframe>
          <iframe
            height="89.5px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UC-lHJZR3Gqxm24_Vd_AJ5Yw/embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* middle column */}
      <div className="flex flex-col items-center justify-start w-3/5 gap-1 ">
        <div className="flex items-start justify-between gap-32 p-2">
          {data.map((c) => (
            <LiveCounter channelId={c} />
          ))}
        </div>
        <div className="absolute top-[260px] w-[125px] h-[80px] overflow-hidden text-2xl rounded box-3">
          <iframe
            height="90px"
            width="300px"
            frameborder="0"
            src="https://socialcounts.org/compare/youtube-live-subscriber-count/UCX6OQ3DkcsbYNE6H8uQQuVA/youtube-live-subscriber-count/UCtxD0x6AuNNqdXO9Wp5GHew/embed?style=.compareId_difference%7Bcolor%3A+rgba%28255%2C255%2C255%2C1%29%7D%21important%"
            style={{ position: "relative", left: "-100px", top: "-10px" }}
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex items-center justify-center gap-1 p-1 mt-6 flex-wrap box-2">
          {/* {dataSecond.map((ch) => (
            <LiveSubCountTop50 channelId={ch} />
          ))} */}
          <iframe
            height="90px"
            width="240px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UC3gNmTGu-TTbFPpfSs5kNkg/embed?style=.odoParrent%7Bcolor%3A+rgba%28255%2C255%2C255%2C1%29%7D"
            allowFullScreen
          ></iframe>
          <iframe
            height="90px"
            width="240px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UCgFXm4TI8htWmCyJ6cVPG_A/embed?style=.odoParrent%7Bcolor%3A+rgba%28255%2C255%2C255%2C1%29%7D"
            allowFullScreen
          ></iframe>
          <iframe
            height="90px"
            width="240px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UC56gTxNs4f9xZ7Pa2i5xNzg/embed?style=.odoParrent%7Bcolor%3A+rgba%28255%2C255%2C255%2C1%29%7D"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* last column */}
      <div className="w-1/5">
        <div className="flex flex-col bg-black">
          {/* <h2>
          Twitter: Ur . ronaldo <i>vs</i> MrBeast
        </h2> */}
          <iframe
            height="89.5px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UCFFbwnve3yF62-tVXkTyHqg/embed"
            allowFullScreen
          ></iframe>
          <iframe
            height="89.5px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UCJ5v_MCY6GNUBTO8-D3XoAg/embed"
            allowFullScreen
          ></iframe>
          <iframe
            height="89.5px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UCyoXW-Dse7fURq30EWl_CUA/embed"
            allowFullScreen
          ></iframe>
          <iframe
            height="89.5px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UC6-F5tO8uklgE9Zy8IvbdFw/embed"
            allowFullScreen
          ></iframe>
          {/* <iframe
          height="89.5px"
          width="320px"
          frameborder="0"
          src="https://socialcounts.org/youtube-live-subscriber-count/UC6-F5tO8uklgE9Zy8IvbdFw/embed"
          allowFullScreen
        ></iframe> */}
          <iframe
            height="89.5px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UCOmHUn--16B90oW2L6FRR3A/embed"
            allowFullScreen
          ></iframe>
          <iframe
            height="89.5px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UCBnZ16ahKA2DZ_T5W0FPUXg/embed"
            allowFullScreen
          ></iframe>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default LiveCount;
