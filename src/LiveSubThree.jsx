import React, { useRef, useState } from "react";
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
import LiveSubCountAll3D from "./LiveSubCountNextCount3D";
import Counter from "./counter";

export default function LiveSubThree() {
  const [diff, setDiff] = useState(0);
  const data = [
    "UCRijo3ddMTht_IHyNSNXpNQ",
    // "UCq-Fj5jknLsUf-MWSy4_brA",
    "UCqECaJ8Gagnn7YCbPEzWH6g",
    "UCtxD0x6AuNNqdXO9Wp5GHew",
  ];
  let rank = 38;
  return (
    <>
      <Swiper
        // effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((channel, i) => (
          <SwiperSlide>
            <LiveSubCountAll3D
              //   id={"UCtxD0x6AuNNqdXO9Wp5GHew"}
              id={channel}
              diff={diff}
              setDiff={setDiff}
              // setSubList={setSubList}
              // index={i === 1 ? 56 : rank++}
              index={rank++}
              main={1}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Counter />
    </>
  );
}
