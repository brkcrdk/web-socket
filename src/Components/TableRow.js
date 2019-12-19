import React, { useState, useEffect } from "react";

const TableRow = ({ currency, name }) => {
  const [currencyBid, setCurrencyBid] = useState(0);
  const [currencyAsk, setCurrencyAsk] = useState(0);
  const [bidColour, setBidColour] = useState("");
  const [askColour, setAskColour] = useState("");

  useEffect(() => {
    if (currency) {
      setCurrencyBid(currency.bid);
    }
  }, [currency]);

  return (
    <tr>
      <td>{name}</td>
      <td>{currency.ask}</td>
      <td>{currency.bid}</td>
    </tr>
  );
};

export default TableRow;
