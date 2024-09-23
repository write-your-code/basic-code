import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, allowSlideNext } from "swiper/react";
// import Flag from 'react-world-flags'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./App.css";

// import required modules
import {
  EffectCoverflow,
  EffectCube,
  Pagination,
  Keyboard,
  EffectCards,
} from "swiper/modules";
import SwiperCore from "swiper/core";
import LiveSubCountAll from "./LiveSubCountNextCount";
import LiveSubCountAll3D from "./LiveSubCountNextCountWithImage";

export default function LiveSubThree() {
  // Swiper.use([Autoplay]);
  const data = [
    { id: "UCAjiqOnjDLv03iRfpT48RPw", country: "UY", button: "silver" },
    { id: "UCZXD4PIYIwC48tkTsdGAKYw", country: "PL", button: "silver" },
    { id: "UCmpztIYH2SAIV2nILOVILPw", country: "US", button: "silver" },
    {
      id: "UC2-RW8yUo_Bi8Ew1tDZXTDw",
      country: "CZ",
      defaultImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQboawKJeotIdFh-GY_VDoiotk9VVFbXIcu35eOt6LnVLcDYZ3VpCwUBydTXV_5Il6_Q8&usqp=CAU",
      button: "silver",
    },
    { id: "UCNT51REVqX4rmVfOuVZeZaA", country: "US", button: "silver" },
    { id: "UCrZjn-r676Gpb2qM5dVxm4Q", country: "ES", button: "silver" },
    { id: "UC_ixBF2BWlWc9Bxo7fReiSA", country: "ES", button: "silver" },
    { id: "UCEe0fqY98HFHM5EkMqYlmtw", button: "silver" },
    { id: "UCejJinziywa6y7kuXz56FKQ", country: "GB", button: "silver" },
    { id: "UClikilDc0QBJxQ2jZXOYg0g", country: "PT", button: "silver" },
    { id: "UCteEFoRrcwmapc9BZypd7-w", country: "US", button: "silver" },
    {
      id: "UC7fVeqKlvCnbBxvmhwTWKlA",
      country: "GB",
      defaultImg:
        "https://static.standard.co.uk/2023/10/06/11/newFile.jpg?quality=75&auto=webp&width=960",
    },
    // { id: "UC7fVeqKlvCnbBxvmhwTWKlA", country: "GB" },
    { id: "UCgYNj_GeOnYpzMQBG3MWXiQ", country: "CA" },
    { id: "UCEqdc35tZ5SCYiurOVac0Xw", country: "GB" },
    { id: "UCwh_gGqXKgbasRRtY9W3ofA", country: "FR" },
    { id: "UCjNQSS3FXXEVs6GNHvkSOLA", country: "FR" },
    { id: "UCIn7wtUMkEvDCnLvT15V6aw", country: "DE" },
    { id: "UC0JhlRkfXzvAJehuEeVjqpg", country: "FR" },
    { id: "UCTiJGWJiDJYlMQYUchNrHkA", country: "FR", button: "golden" },
    { id: "UCPAiS32go3-GwTO0kmlVX7g", country: "GB", button: "golden" },
    { id: "UC7Atj6-H_v-MaXc7CbC7lRw", country: "BR", button: "golden" },
    { id: "UCi33DX7KG3M3bI0ipjOP2Eg", country: "GB", button: "golden" },
    { id: "UCdS5sqt3r7wkTtaPgkfiIEQ", country: "BR", button: "golden" },
    { id: "UCMWk5KfRcscl-Gl-csepzfQ", country: "BR", button: "golden" },
    { id: "UCmkNr8WQC7zAC5TnYDI0wQw", country: "SP", button: "golden" },
    { id: "UCMl6IV2MR5W2gg4qHYAqcoQ", country: "AR", button: "golden" },
    { id: "UC5da8mf7_m2eLIlq-GUyxRw", country: "BR", button: "golden" },
    { id: "UCtxD0x6AuNNqdXO9Wp5GHew", country: "PU", button: "diamond" },
  ];
  let rank = 1;
  return (
    <>
      <Swiper
        effect={"coverflow"}
        // effect={"cube"}
        // cubeEffect={{
        //   shadow: true,
        //   slideShadows: true,
        //   shadowOffset: 20,
        //   shadowScale: 0.94,
        // }}
        // grabCursor={true}
        // allowSlideNext={true}
        // centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[
          EffectCube,
          // Keyboard,
          // AutoPlay,
          Pagination,
          EffectCoverflow,
          EffectCards,
        ]}
        // effect={"cards"}
        // modules={[EffectCards]}
        // autoplay={{
        //   delay: 50000,
        //   disableOnInteraction: false,
        // }}
        // EffectCoverFlow={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        // pagination={true}
        // modules={[Pagination, EffectCoverflow]}
        className="mySwiper"
      >
        {data.map((channel, i) => (
          <SwiperSlide>
            <LiveSubCountAll3D
              //   id={"UCtxD0x6AuNNqdXO9Wp5GHew"}
              id={channel.id}
              // diff={diff}
              // setDiff={setDiff}
              // setSubList={setSubList}
              index={data.length + 1 - rank++}
              main={1}
              country={channel.country}
              defaultImg={channel.defaultImg}
              type={channel.button}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
