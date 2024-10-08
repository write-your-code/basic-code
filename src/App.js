import LiveSubCountAll from "./LiveSubCountNextCount";
import LiveSubCountTop50 from "./LiveSubCountTop50";
import { useEffect, useState } from "react";
import {
  ChannelList,
  ChannelListForTop50,
  top50Channels,
} from "./data/ChannelList";
import LiveSubThree from "./LiveSubThree";
import LiveSubSwiper from "./LiveSubSwiper";
import LiveCount from "./LiveCount";
import RonaldovsBeast from "./RonaldoMrbeastMain";
import RonalWith10Behind from "./RonaldoWith10Behind";
import RonalWith10Behind10Above from "./RonaldoWithAbove10Behind10Master";
import RonalWith2Behind2Above from "./RonaldoWithAbove2Behind2Master";
import RonalAboveAll from "./RonaldoWithAboveAll";
// import Top50 from "./Top50SubsCountMaster";
import Top50 from "./Top50SubsCountMasterWithOwnData";
import Top50OwnApi from "./Top50SubsCountParentOwnApi";
import TwoChannelsFight from "./TwoChannelsFight";
import axios from "axios";

function App() {
  const [list, setList] = useState(ChannelList);
  const [array, setArray] = useState(ChannelListForTop50);
  const [subList, setSubList] = useState(top50Channels);
  const [diff, setDiff] = useState();
  const [layout, setLayout] = useState(0);
  let rank = 1;
  useEffect(() => {
    // const intervalId = setInterval(async () => {
    // try {
    //   // const response = await axios.get(
    //   //   `https://api-v2.nextcounts.com/api/youtube/channel/${id}`
    //   // );
    //   // const responseEstSub = await axios.get(
    //   //   `https://api.socialcounts.org/youtube-live-subscriber-count/${id}`

    //   // old imeplentation
    //   // const responseEstSub = await axios.get(
    //   //   `http://localhost:8000/api/${id}`
    //   // );

    //   // new imeplentation
    //   // const responseEstSub = await axios.get(`http://localhost:8000/api`);

    //   // const dataEst = await responseEstSub.data;
    //   // console.log("est dtat is: ", responseEstSub);
    //   // console.log("estData from new method is: ", dataEst);
    //   // setValue(dataEst.est_sub);
    //   // setViews(dataEst.table[0].count);
    //   // setDiff && setDiff(dataEst.est_sub);
    //   // setSubList &&
    //   // setSubList((current) => {
    //   //   // current.sort((a, b) => a.id - b.id);
    //   //   // current.filter((value, i) => current.indexOf(value) === i);
    //   //   // return [...current, dataEst.est_sub];
    //   //   current.map((c, i) => {
    //   //     if (c.channelId === id) {
    //   //       // return { ...c, subs: dataEst.est_sub };
    //   //       current[i] = { ...c, subs: dataEst.est_sub };
    //   //     }
    //   //   });
    //   //   return current;
    //   // });
    //   // return [...current, dataEst.est_sub];
    //   // });
    //   // return data;
    // } catch (error) {
    //   console.log(error);
    // }
    // setSubList((current) => current.sort((a, b) => b.subs - a.subs));
    // console.log("current sub list: ", subList);
    // }, 3000);
    // return () => {
    //   clearInterval(intervalId);
    // };
    console.log("state changed in app.js");
  }, []);
  return (
    <div
      className={`
      App bg-[#15202b] ${
        layout === 2 || layout === 8 ? "bg-gray-200" : "bg-black"
      } ${layout === 5 ? "bg-transparent" : "bg-black"} pt-[0px]`}
    >
      {/* <LiveSubCount /> */}
      {/* <Counter /> */}
      {layout === -1 && <LiveCount />}
      {/* <div className="text-red-500 absolute top-0">
        {subList[0] && subList[0]} vs
        {subList[1] && subList[1]}
      </div> */}
      {layout === 0 && (
        <div className="bg-blue-300">
          <button className="bg-red-400 p-2 m-2" onClick={() => setLayout(-1)}>
            layout old
          </button>
          <button className="bg-red-400 p-2 m-2" onClick={() => setLayout(1)}>
            layout 1
          </button>
          <button className="bg-red-400 p-2 m-2" onClick={() => setLayout(2)}>
            layout 2
          </button>
          <button className="bg-red-400 p-2 m-2" onClick={() => setLayout(3)}>
            layout 3
          </button>
          <button className="bg-red-400 p-2 m-2" onClick={() => setLayout(4)}>
            Top 50
          </button>
          <button className="bg-red-400 p-2 m-2" onClick={() => setLayout(5)}>
            Top 30-42
          </button>
          <button className="bg-red-400 p-2 m-2" onClick={() => setLayout(6)}>
            Top 50 NEW
          </button>
          <button className="bg-red-400 p-2 m-2" onClick={() => setLayout(7)}>
            Ronaldo with 10 Behind
          </button>
          <button className="bg-red-400 p-2 m-2" onClick={() => setLayout(8)}>
            Ronaldo Above All
          </button>
          <button className="bg-red-400 p-2 m-2" onClick={() => setLayout(9)}>
            Top 50 with own api
          </button>
          <button className="bg-red-400 p-2 m-2" onClick={() => setLayout(10)}>
            Ronaldo 10 above 10 behind
          </button>
          <button className="bg-red-400 p-2 m-2" onClick={() => setLayout(11)}>
            Ronaldo 2 above 2 behind
          </button>
        </div>
      )}
      {layout === 11 && (
        <>
          {/* <TwoChannelsFight /> */}
          <RonalWith2Behind2Above />
        </>
      )}
      {layout === 10 && (
        <>
          {/* <TwoChannelsFight /> */}
          <RonalWith10Behind10Above />
        </>
      )}
      {layout === 9 && (
        <>
          <TwoChannelsFight />
          <div
            className={`mb-[0px] h-[540px] relative flex flex-wrap flex-col  gap-[1.4px] mt-[60px]`}
          >
            {subList?.map((channel, index) => {
              return (
                <Top50OwnApi
                  channel={channel}
                  id={channel.channelId}
                  diff={diff}
                  setSubList={setSubList}
                  index={channel.id}
                />
              );
            })}
          </div>
        </>
      )}
      {layout === 8 && <RonalAboveAll />}
      {layout === 7 && <RonalWith10Behind />}
      {layout === 6 && <Top50 />}
      {layout === 5 && <RonaldovsBeast />}
      {layout === 4 && (
        <div className="flex h-[620px] w-[250px] flex-col flex-wrap gap-0">
          {array.map((channel, index) => {
            if (channel === "UCtxD0x6AuNNqdXO9Wp5GHew") {
              return (
                <LiveSubCountTop50
                  key={channel.id}
                  id={channel.id}
                  channelId={channel.channelId}
                  diff={diff}
                  setDiff={setDiff}
                  setSubList={setSubList}
                  index={56}
                  main={1}
                />
              );
            }
            return (
              <LiveSubCountTop50
                key={channel.id}
                id={channel.id}
                channelId={channel.channelId}
                diff={diff}
                setDiff={setDiff}
                setSubList={setSubList}
                index={rank++}
              />
            );
          })}
        </div>
      )}
      {layout === 3 && <LiveSubSwiper />}
      {layout === 2 && <LiveSubThree />}
      {layout === 1 && (
        <div className="flex h-[620px] w-[320px] flex-col flex-wrap gap-0">
          {list.map((channel, index) => {
            if (channel === "UCtxD0x6AuNNqdXO9Wp5GHew") {
              return (
                <LiveSubCountAll
                  // id={"UCtxD0x6AuNNqdXO9Wp5GHew"}
                  id={channel}
                  diff={diff}
                  setDiff={setDiff}
                  setSubList={setSubList}
                  index={40}
                  main={1}
                />
              );
            }
            return (
              <LiveSubCountAll
                // id={"UCtxD0x6AuNNqdXO9Wp5GHew"}
                id={channel}
                diff={diff}
                setSubList={setSubList}
                index={rank++}
              />
            );
          })}
        </div>
      )}
      {/* <video autoplay muted loop id="myVideo">
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video> */}
    </div>
  );
}

export default App;
