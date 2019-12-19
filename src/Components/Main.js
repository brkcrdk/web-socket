import React from "react";
import "./main.scss";
import TableRow from "./TableRow";
const Main = ({ eur, gbp }) => {
  const renderEur = eur && (
    <TableRow name="EURUSD" bid={eur.bid} ask={eur.ask} />
  );
  const renderGbp = gbp && (
    <TableRow name="GBPUSD" bid={gbp.bid} ask={gbp.ask} />
  );

  return (
    <div id="main-container">
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Bid</th>
            <th>Ask</th>
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
