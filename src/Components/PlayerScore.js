import { useSelector } from "react-redux";
import { selectPlayerHasAdvantage } from "./Selectors";

export function PlayerScore({ playerId, playerName }) {
    const score = useSelector((state) => state.game[playerId + 'Score']);
    const hasAdvantage = useSelector(selectPlayerHasAdvantage(playerId))
    
    return (
        <div className="player-score">
            <p>{playerName}</p>
            <p>{(hasAdvantage ? "Avantage - " : "") + score}</p>
        </div>
    );
}
