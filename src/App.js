import './App.css';
import { Display } from './Display';
import { PlayPauseButton } from './Components/PlayPauseButton';
import { PointScoredButton } from './Components/PointScoredButton';
import { ResetButton } from './Components/ResetButton';
import { Historical } from './Components/Historical';
import { PlayerScore } from './Components/PlayerScore';

function App() {
  return (
    <div className="App">
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
      <Historical/>
    </div>
  );
}

export default App;
