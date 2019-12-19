import React, { useState, useEffect } from "react";
import "./main.scss";
const Main = ({ eur, gbp }) => {
  const [eurBid, setEurBid] = useState(0);
  useEffect(() => {
    if (eur) {
      if (eurBid !== eur.bid) {
        setEurBid(eur.bid);
      }
    }
  }, [eur, eurBid]);

  const renderEur = eur && (
    <tr>
      <td>EURUSD</td>
      <td>{eur.ask}</td>
      <td>{eur.bid}</td>
    </tr>
  );
  const renderGbp = gbp && (
    <tr>
      <td>GBPUSD</td>
      <td>{gbp.ask}</td>
      <td>{gbp.bid}</td>
    </tr>
  );
  return (
    <div id="main-container">
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Ask</th>
            <th>Bid</th>
          </tr>
        </thead>
        <tbody>
          {renderEur}
          {renderGbp}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
