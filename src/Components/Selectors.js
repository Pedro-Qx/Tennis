export const selectPlayerHasAdvantage = (playerId) => {
    return (state) => state.game.advantage === playerId
};