import React, { useEffect, useState } from "react";

const Main = () => {
  useEffect(() => {
    const ws = new WebSocket(`ws://35.235.56.36:10010/price`);
    ws.onmessage = (e) => {
      console.log(e.data);
    };
  }, []);
  return <div></div>;
};

export default Main;
