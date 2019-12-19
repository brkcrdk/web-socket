import React, { useState, useEffect } from "react";

const TableRow = ({ bid, ask, name }) => {
  const [currencyBid, setCurrencyBid] = useState(0);
  const [currencyAsk, setCurrencyAsk] = useState(0);
  const [bidColour, setBidColour] = useState("");
  const [askColour, setAskColour] = useState("");

  useEffect(() => {
    if (bid !== currencyBid) {
      setCurrencyBid(bid);
      if (bid > currencyBid) {
        setBidColour("green");
      } else {
        setBidColour("red");
      }
    }
    if (ask !== currencyAsk) {
      setCurrencyAsk(ask);
      if (ask > currencyAsk) {
        setAskColour("green");
      } else {
        setAskColour("red");
      }
    }
  }, [ask, bid, currencyAsk, currencyBid]);
  return (
    <tr>
      <td>{name}</td>
      <td className={bidColour === "red" ? "red" : "green"}>{bid}</td>
      <td className={askColour === "red" ? "red" : "green"}>{ask}</td>
    </tr>
  );
};

export default TableRow;
