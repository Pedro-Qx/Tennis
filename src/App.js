import './App.css';
import { Display } from './Display';
import { PlayPauseButton } from './Components/PlayPauseButton';
import { PointScoredButton } from './Components/PointScoredButton';
import { ResetButton } from './Components/ResetButton';
import { PlayerScore } from './Components/PlayerScore';
import { PlayerPoints } from './Components/PlayerPoints';

function App() {
  return (
    <div className="App">
      <PlayerPoints playerId="player1" playerName="Player 1" />
      <PlayerPoints playerId="player2" playerName="Player 2" />
      <Display />
      <PlayerScore playerId="player1" playerName="Player 1"/>
      <PlayerScore playerId="player2" playerName="Player 2"/>
      <div className="buttons-row">
        <PointScoredButton playerId="player1">Point Jouer 1</PointScoredButton>
        <PointScoredButton playerId="player2">Point Jouer 2</PointScoredButton>
      </div>
      <div className="buttons-row">
        <ResetButton />
        <PlayPauseButton />
      </div>
    </div>
  );
}

export default App;
