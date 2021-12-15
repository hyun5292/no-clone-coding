import React from 'react';
import ReactDOM from 'react-dom';
import './default.css';
import './index.scss';
import lifeData from "./db/lifeData.json";  //Norman life Data JSON file

//Norman life Data 뿌려주기
const App = () => {
  return (
    <div>
      <h3 class="cont-title">
            Here's a time line of Dr. Borlaug's life:
      </h3>
      <ul>
        {lifeData.normanHistory.map((lData) => (
          <li key={lData.value}>
            <strong>{lData.year}</strong> - {lData.life}
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
