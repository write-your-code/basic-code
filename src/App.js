import LiveSubCountAll from "./LiveSubCountNextCount";
import LiveSubCountTop50 from "./LiveSubCountTop50";
import { useState } from "react";
import { ChannelList, ChannelListForTop50 } from "./data/ChannelList";
import LiveSubThree from "./LiveSubThree";
import LiveSubSwiper from "./LiveSubSwiper";
import LiveCount from "./LiveCount";
import RonaldovsBeast from "./RonaldoMrbeastMain";
import RonalWith10Behind from "./RonaldoWith10Behind";
// import Top50 from "./Top50SubsCountMaster";
import Top50 from "./Top50SubsCountMasterWithOwnData";
function App() {
  const [list, setList] = useState(ChannelList);
  const [array, setArray] = useState(ChannelListForTop50);
  const [subList, setSubList] = useState([]);
  const [diff, setDiff] = useState();
  const [layout, setLayout] = useState(0);
  let rank = 1;
  return (
    <div
      className={`
      App bg-[#15202b] ${layout === 2 ? "bg-gray-200" : "bg-black"} ${
        layout === 5 ? "bg-transparent" : "bg-black"
      } pt-[0px]`}
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
        </div>
      )}
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
      <video autoplay muted loop id="myVideo">
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}

export default App;
