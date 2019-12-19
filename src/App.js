import React, { useEffect, useState } from "react";
import "./App.css";
// import Main from "./Components/Main";
function App() {
  const [data, setData] = useState();
  const gbpUsd = "GBPUSD";
  const eurUsd = "EURUSD";
  useEffect(() => {
    const ws = new WebSocket(`ws://35.235.56.36:10010/price/`);
    ws.onopen = () => {
      console.log("opend");
    };
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.symbol === "GBPUSD") console.log(data.symbol);
    };
  }, [data]);
  return <div className="App"></div>;
}

export default App;
