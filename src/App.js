import { useState } from 'react';

function App() {
  const [ userScore, setUserScore ] = useState(0);
  const [ compScore, setCompScore ] = useState(0);

  return (
    <div className="frame">
      <div className="score">
        <div className="player-score">{userScore}</div>
        <div className="computer-score">{compScore}</div>
      </div>
      <div className="ball" id="ball"></div>
      <div className="paddle user" id="user-paddle"></div>
      <div className="paddle comp" id="comp-paddle"></div>
    </div>
  );
}

export default App;
