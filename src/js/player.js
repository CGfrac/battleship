import { Gameboard } from "./gameboard";

const Player = (ai=false) => {
    const _gameboard = Gameboard();

    const attacked = coord => _gameboard.receiveAttack(coord);

    const attack = ai ?
        (player) => {
            const randCoord = Array.from(Array(2), () => Math.floor(Math.random() * 10));
            return player.attacked(randCoord);
        } :
        (player, ...coord) => player.attacked(coord);

    return {
        attacked,
        attack
    }
};

export { Player };
