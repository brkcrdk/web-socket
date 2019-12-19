import React from "react";
import "./main.scss";
const Main = (props) => {
  // console.log({ eur: props.eur, gbp: props.gbp });

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
          <tr>
            <td>EURUSD</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>GBPUSD</td>
            <td>1</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Main;
