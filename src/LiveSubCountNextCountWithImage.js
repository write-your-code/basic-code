import React, { useState, useEffect, useRef } from "react";
import "./LiveSubCountWithImage.css";
import axios from "axios";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import Flag from "react-world-flags";
const LiveSubCountAll3D = ({
  id,
  diff = 0,
  setDiff,
  setSubList,
  index,
  main = 0,
  country = "",
  defaultImg = "",
  type = "silver",
}) => {
  const [data, setData] = useState({});
  const [value, setValue] = useState(0);
  const [views, setViews] = useState(0);
  const [diffSub, setDiffSub] = useState(0);
  // for border animation
  const boxRef = useRef(null);
  const youTubeBtns = [
    {
      type: "silver",
      img: "https://i.pinimg.com/474x/f4/21/c5/f421c5e5de7b8ac861d6d1bc0f498d9b.jpg",
    },
    {
      type: "golden",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkpL5_lRYa18a0mNS7aNq2htI6bBDqbSZPiwboO6HSfV--K2Hdgk_44tI53WO-6y2TiI&usqp=CAU",
    },
    {
      type: "diamond",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlK1shOcRWmH1b1DhJHv2Waa1E-xPj4o8hcuLkgRreYXrmBapwmUE1avFcICCtzRVM60&usqp=CAU",
    },
  ];
  useEffect(() => {
    const boxElement = boxRef.current;
    if (!boxElement) {
      return;
    }

    const updateAnimation = () => {
      const angle =
        (parseFloat(boxElement.style.getPropertyValue("--angle")) + 0.5) % 360;
      boxElement.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    requestAnimationFrame(updateAnimation);
  }, []);
  const fetchStats = async () => {
    try {
      // const response = await axios.get(
      //   `https://api-v2.nextcounts.com/api/youtube/channel/${id}`
      // );
      const responseEstSub = await axios.get(
        `https://api.socialcounts.org/youtube-live-subscriber-count/${id}`
      );

      // const data = response.data;
      const dataEst = responseEstSub.data;
      console.log("estData is: ", dataEst);
      setValue(dataEst.est_sub);
      setViews(dataEst.table[0].count);
      setDiff && setDiff(dataEst.est_sub);
      setSubList &&
        setSubList((current) => {
          current.sort((a, b) => {
            return b - a;
          });
          current.filter((value, i) => current.indexOf(value) === i);
          return [...current, dataEst.est_sub];
        });
      return data;
      // return {
      //   subscriberCount: data.statistics.subscriberCount,
      //   channelName: data.snippet.title,
      //   profilePicture: data.snippet.thumbnails.default.url,
      // };
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
      setData(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(fetchStats, 3000); // Fetch every 3 seconds
    // const timeoutId = setTimeout(() => setValue(data.subcount), 300);
    return () => {
      clearInterval(intervalId);
    }; // Clean up on unmount
  }, []);

  useEffect(() => {
    fetchChannelDetails();
  }, []);
  return (
    <div className="mb-[0px]">
      <div
        className="flex flex-col  bg-gradient-to-b from-orange-400 rounded-lg to-red-500 dark:from-orange-400:to-red-500 px-2 py-3 text-2xl items-center h-[100%] bg-black"
        ref={boxRef}
        style={{
          "--angle": "0deg",
          "--border-color": "linear-gradient(var(--angle), #070707, #687aff)",
          "--bg-color": "linear-gradient(#131219, #131219)",
        }}
      >
        <span className="text-xl font-bold text-yellow-200 bg-black rounded-full w-[30px] h-[30px] text-center mb-1">
          {index}
        </span>
        <div className="relative flex justify-center">
          <img
            className="short imgExcluded"
            src={
              data.userBanner ||
              "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s88-c-k-c0x00ffffff-no-rj"
            }
          />
          <img
            className="coverImg imgExcluded"
            src={
              defaultImg ||
              data.userImg ||
              "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s88-c-k-c0x00ffffff-no-rj"
            }
          />
        </div>

        <div className="flex flex-col justify-center items-center text-white text-3xl py-2">
          <p className="font-semibold">{data.username || "MrBeast"}</p>
          {Math.floor(data.subcount) >= 1000000 ? (
            <p className="text-4xl font-bold text-red-700">
              {Math.floor(data.subcount) / 1000000} M
            </p>
          ) : Math.floor(data.subcount) >= 100000 ? (
            <p className="text-4xl font-bold text-red-700">
              {Math.floor(data.subcount) / 1000} K
            </p>
          ) : (
            <p className="text-4xl font-bold text-red-700">
              {Math.floor(data.subcount) / 1000} K
            </p>
          )}
          <p className="text-lg">
            Live Count: <Odometer value={value} />
          </p>
          <div className="flex w-full gap-20 mt-4">
            {/* total videos */}
            <div className="flex flex-col w-full gap-2 items-center text-xl">
              <span className="text-xl">Videos</span>
              <Odometer value={data.videos} />
            </div>
            {/* total views */}
            <div className="flex flex-col gap-2 items-center text-xl text-nowrap">
              <span className="text-xl">Views</span>
              <Odometer value={views} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 justify-between w-full bg-black/[0.1] rounded-xl">
          {/* {data.country} - {country} */}
          <Flag code={country || data.country || "PL"} height="1" width="20" />
          <img
            src={
              type === "silver"
                ? youTubeBtns[0].img
                : type === "golden"
                ? youTubeBtns[1].img
                : youTubeBtns[2].img
            }
            alt=""
            className="imgExcluded object-cover btnImg mt-2"
          />
          <p className="text-gray-100 text-xl font-bold capitalize">
            {type + " Button"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveSubCountAll3D;
