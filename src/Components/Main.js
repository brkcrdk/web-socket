import React, { useState, useEffect } from "react";
import "./main.scss";
const Main = ({ eur, gbp }) => {
  const [eurBid, setEurBid] = useState(0);
  const [eurAsk, setEurAsk] = useState(0);
  const [gbpBid, setGbpBid] = useState(0);
  const [gbpAsk, setGbpAsk] = useState(0);

  useEffect(() => {
    if (eur) {
      if (eurBid !== eur.bid) {
        setEurBid(eur.bid);
        if (eurBid < eur.bid) {
        } else {
        }
      }
      if (eurAsk !== eur.ask) {
        setEurAsk(eur.ask);
        if (eurAsk < eur.ask) {
        } else {
        }
      }
    }
    if (gbp) {
      if (gbpBid !== gbp.bid) setGbpBid(gbp.bid);
      if (gbpAsk !== gbp.ask) setGbpAsk(gbp.ask);
    }
  }, [eur, eurBid, eurAsk, gbp, gbpBid, gbpAsk]);

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
