import { configureStore, createSlice } from '@reduxjs/toolkit';
import { produce } from 'immer';

// state
const initialState = {
    playing: true,
    player1Score: 0,
    player2Score: 0,
    advantage: null,
    winner: null,
    p1WinGame: 0,
    p2WinGame: 0,
    
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
                    draft.winner = player;
                    if (player === "player1") {
                        draft.p1WinGame += 1;
                    } else {
                        draft.p2WinGame += 1;
                    }                   
                    return;
                }
            }

            if (draft.advantage === player) {
                draft.winner = player;
                if (player === "player1") {
                    draft.p1WinGame += 1;
                } else {
                    draft.p2WinGame += 1;
                }
                return;
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