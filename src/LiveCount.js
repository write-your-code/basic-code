import React, { useState, useEffect } from "react";
import { getChannelDetails, getBeastDetails } from "./api/youtube";
import { getChannelDetailsB } from "./api/youtube-beast";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Counter from "./counter";

const LiveCount = () => {
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

  const fetchChannelDetails = async () => {
    const details = await getChannelDetails();
    setChannelDetails(details);
    console.log(details);
  };
  const fetchBeastDetails = async () => {
    const details = await getBeastDetails();
    setBeastDetails(details);
    console.log(details);
  };

  // useEffect(() => {
  //   // fetchChannelDetails();
  //   // fetchBeastDetails();
  //   // const intervalId = setInterval(fetchChannelDetails, 30000000); // Fetch every 3 seconds
  //   // const intervalId1 = setInterval(fetchBeastDetails, 30000000); // Fetch every 3 seconds
  //   // return () => {
  //   //   clearInterval(intervalId);
  //   //   // clearInterval(intervalId1);
  //   // }; // Clean up on unmount
  // }, []);

  return (
    <div className="text-xl flex width-[100%] px-0">
      <div className="max-w-[285px]">
        <div className="flex flex-col gap-[0.5px] bg-purple-500">
          <iframe
            height="90px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UCq-Fj5jknLsUf-MWSy4_brA/embed"
            allowFullScreen
          ></iframe>
          <iframe
            height="90px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UCbCmjCuTUZos6Inko4u57UQ/embed"
            allowFullScreen
          ></iframe>
          <iframe
            height="90px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UCpEhnqL0y41EpW2TvWAHD7Q/embed"
            allowFullScreen
          ></iframe>
          <iframe
            height="90px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UCk8GzjMOrta8yxDcKfylJYw/embed"
            allowFullScreen
          ></iframe>
          <iframe
            height="90px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UCvlE5gTbOvjiolFlEm-c_Ow/embed"
            allowFullScreen
          ></iframe>
          <iframe
            height="90px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UCJplp5SjeGSdVdwsfb9Q7lQ/embed"
            allowFullScreen
          ></iframe>
          <iframe
            height="90px"
            width="320px"
            frameborder="0"
            src="https://socialcounts.org/youtube-live-subscriber-count/UC-lHJZR3Gqxm24_Vd_AJ5Yw/embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* middle column */}
     
        <iframe
          height="790px"
          width="100%"
          frameborder="0"
          className="text-xl"
          src="https://socialcounts.org/compare/youtube-live-subscriber-count/UCtxD0x6AuNNqdXO9Wp5GHew/youtube-live-subscriber-count/UCX6OQ3DkcsbYNE6H8uQQuVA"
          allowFullScreen
        ></iframe>
      
      {/* last column */}

      <div className="flex flex-col max-w-[285px] bg-purple-500">
        {/* <h2>
          Twitter: Ur . ronaldo <i>vs</i> MrBeast
        </h2> */}
        <iframe
          height="90px"
          width="320px"
          frameborder="0"
          src="https://socialcounts.org/youtube-live-subscriber-count/UCFFbwnve3yF62-tVXkTyHqg/embed"
          allowFullScreen
        ></iframe>
        <iframe
          height="90px"
          width="320px"
          frameborder="0"
          src="https://socialcounts.org/youtube-live-subscriber-count/UCJ5v_MCY6GNUBTO8-D3XoAg/embed"
          allowFullScreen
        ></iframe>
        <iframe
          height="90px"
          width="320px"
          frameborder="0"
          src="https://socialcounts.org/youtube-live-subscriber-count/UCyoXW-Dse7fURq30EWl_CUA/embed"
          allowFullScreen
        ></iframe>
        <iframe
          height="90px"
          width="320px"
          frameborder="0"
          src="https://socialcounts.org/youtube-live-subscriber-count/UC6-F5tO8uklgE9Zy8IvbdFw/embed"
          allowFullScreen
        ></iframe>
        {/* <iframe
          height="90px"
          width="320px"
          frameborder="0"
          src="https://socialcounts.org/youtube-live-subscriber-count/UC6-F5tO8uklgE9Zy8IvbdFw/embed"
          allowFullScreen
        ></iframe> */}
        <iframe
          height="90px"
          width="320px"
          frameborder="0"
          src="https://socialcounts.org/youtube-live-subscriber-count/UCOmHUn--16B90oW2L6FRR3A/embed"
          allowFullScreen
        ></iframe>
        <iframe
          height="90px"
          width="320px"
          frameborder="0"
          src="https://socialcounts.org/youtube-live-subscriber-count/UCBnZ16ahKA2DZ_T5W0FPUXg/embed"
          allowFullScreen
        ></iframe>
        <Counter />
      </div>
    </div>
  );
};

export default LiveCount;
