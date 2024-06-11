import { useSelector } from "react-redux";


export function Display(){
    const gameIsPlaying = useSelector((state) => state.game.playing); 
    const winner = useSelector((state)=> state.game.winner);
    const player1Score = useSelector((state)=> state.game.player1Score);
    const player2Score = useSelector((state)=> state.game.player2Score);
    const advantage = useSelector((state)=> state.game.advantage);
    /*return <p>{gameIsPlaying ? "Jeux en cours" : "C'est la pause"}</p>*/
    if (winner) {
        if (winner === "player1") {
          return <p className="display">Joueur 1 gagne</p>;
        } else {
          return <p className="display">Joueur 2 gagne</p>;
        }
      } else if (gameIsPlaying === false) {
        return <p className="display">C'est la pause</p>;
      } else {
        let text = "Le score est: " + player1Score + " - " + player2Score;
        if (advantage) {
          if (advantage === "player1") {
            text += " avantage joueur 1";
          } else {
            text += " avantage joueur 2";
          }
        }
        return <p className="display" id="score">{text}</p>
      }
}

