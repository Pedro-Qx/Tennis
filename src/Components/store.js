import { configureStore, createSlice } from '@reduxjs/toolkit';
import { produce } from 'immer';

// state
const initialState = {
    playing: true,
    player1Score: 0,
    player2Score: 0,
    advantage: null,
    winner: null,
    p1Win: 0,
    p2Win: 0,
    matchWinner: 0,
};


const updateWinner = (draft, player) => {
    draft.winner = player;
    if (player === 'player1') {
        draft.p1Win += 1;
        draft.matchWinner = draft.p1Win;  // Actualizar matchWinner con el valor de p1Win
    } else {
        draft.p2Win += 1;
        draft.matchWinner = draft.p2Win;  // Actualizar matchWinner con el valor de p2Win
    }
};

// Reducer slice
const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        playPause: produce ((draft) => {
            draft.playing = !draft.playing;
        }),
        restartGame: produce ((draft) => {
            draft.playing = true;
            draft.player1Score = 0;
            draft.player2Score = 0;
            draft.advantage = null;
            draft.winner = null;
        }),
        pointScored: produce ((draft, action) => {
            if (!draft.playing || draft.winner) {
                return;
            }

            const player = action.payload.player;
            const otherplayer = player === "player1" ? "player2" : "player1";
            const currentPlayerScore = draft[player + "Score"];
        
            if (currentPlayerScore <= 15) {
                draft[player + "Score"] = currentPlayerScore + 15; //Score contiene la cifra que coloco después del +
                return;
            }

            if (currentPlayerScore === 30) {
                draft[player + "Score"] = 40;
                return;
            }

            if (currentPlayerScore === 40) {
                if (draft[otherplayer + "Score"] !== 40) {
                   updateWinner(draft, player);
                }
            }

            if (draft.advantage === player) {
                updateWinner(draft, player);
            }

            if (draft.advantage === null) {
                draft.advantage = player;
                return;
            }
                        
            draft.advantage = null;
        }),
        
    }
});

// Export actions
export const { playPause, restartGame, pointScored } = gameSlice.actions;

// Configure store
export const store = configureStore({
    reducer: {
        game: gameSlice.reducer
    }
});