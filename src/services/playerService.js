// playerService.js

// This service handles player management in the Park Golf Score App

const players = [];

const addPlayer = (player) => {
    players.push(player);
};

const getPlayers = () => {
    return players;
};

const updatePlayer = (updatedPlayer) => {
    const index = players.findIndex(player => player.id === updatedPlayer.id);
    if (index !== -1) {
        players[index] = updatedPlayer;
    }
};

const removePlayer = (playerId) => {
    const index = players.findIndex(player => player.id === playerId);
    if (index !== -1) {
        players.splice(index, 1);
    }
};

export { addPlayer, getPlayers, updatePlayer, removePlayer };