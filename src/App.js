import React, { useEffect, useState } from "react";
import "./App.css";
// import Main from "./Components/Main";
function App() {
  const [gbp, setGbp] = useState();
  const [eur, setEur] = useState();
  useEffect(() => {
    const ws = new WebSocket(`ws://35.235.56.36:10010/price/`);
    ws.onopen = () => {};
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.symbol === "GBPUSD") {
        setGbp(data);
      } else if (data.symbol === "EURUSD") {
        setEur(data);
      }
    };
    ws.onclose = () => {
      ws.close();
    };
  }, []);
  console.log({ eur: eur, gbp: gbp });
  return <div className="App"></div>;
}

export default App;
