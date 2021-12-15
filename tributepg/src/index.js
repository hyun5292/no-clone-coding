import React from 'react';
import ReactDOM from 'react-dom';
import './default.css';
import './index.scss';
import lifeData from "./db/lifeData.json";

const App = () => {
  return (
    <div>
      <div class="cont-title">
            Here's a time line of Dr. Borlaug's life:
      </div>
      <ul>
        {lifeData.normanHistory.map((lData) => (
          <li key={lData.value}>
            <span>{lData.year}</span>
            - {lData.life}
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('cont')
);
