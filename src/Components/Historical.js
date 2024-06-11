import React from "react";
import { useSelector } from "react-redux";

export function Historical() {
    const p1WinGame = useSelector((state) => state.game.p1WinGame);
    const p2WinGame = useSelector((state) => state.game.p2WinGame);
        
    return (
            <p className="display" id="histo">
                {"Joueur 1: " + p1WinGame} <br/>
                {"Joueur 2: " + p2WinGame}
            </p>
    );
} 

   
