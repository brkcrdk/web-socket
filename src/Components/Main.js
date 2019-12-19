import React from "react";
import "./main.scss";
const Main = (props) => {
  console.log(props);
  const renderEur = props.eur && (
    <tr>
      <td>EURUSD</td>
      <td>{props.eur.ask}</td>
      <td>{props.eur.bid}</td>
    </tr>
  );
  const renderGbp = props.gbp && (
    <tr>
      <td>GBPUSD</td>
      <td>{props.gbp.ask}</td>
      <td>{props.gbp.bid}</td>
    </tr>
  );
  return (
    <div id="main-container">
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Asks</th>
            <th>Bids</th>
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
