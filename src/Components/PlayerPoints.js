import React from "react";
import { useSelector } from "react-redux";

export function PlayerPoints ({playerId, playerName}){
    const p1Win = useSelector((state) => state.game.p1Win);
    const p2Win = useSelector((state) => state.game.p2Win);
    
    // Determinar el número de juegos ganados en función del playerId
    const winningMatches = playerId === 'player1' ? p1Win : p2Win;
  
    return <div className="player-points" id="histo">
        <p>{playerName}</p>
        <p>{ winningMatches + " " + "jeux gagnés"}</p>
    </div>
}