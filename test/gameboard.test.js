import { Gameboard } from "../src/js/gameboard";

const gameboard = Gameboard();

test('Placing a ship should return true', () => {
    expect(gameboard.placeShip(1, [0, 1])).toBe(true);
});

test('Placing a ship where there is another one should return false', () => {
    expect(gameboard.placeShip(1, [0, 1])).toBe(false);
});

test('Number of coords should be equal to length of ship', () => {
    expect(gameboard.placeShip(2, [0, 1])).toBe(false);
});

test('Coords should be within the gameboard', () => {
    expect(gameboard.placeShip(1, [-1, 1])).toBe(false);
    expect(gameboard.placeShip(2, [2, 9][2, 10])).toBe(false);
});

test('Game is not over if there are ships that are not sunk', () => {
    expect(gameboard.isGameOver()).toBe(false);
});

test('receiveAttack() should refuse invalid coordinates', () => {
    expect(gameboard.receiveAttack([0, -1])).toBe(false);
});

test('receiveAttack() should refuse hitting twice same coord', () => {
    expect(gameboard.receiveAttack([0, 2])).toBe(true);
    expect(gameboard.receiveAttack([0, 2])).toBe(false);
});

test('Hitting the only ship (of size 1) should make isGameOver() true', () => {
    expect(gameboard.receiveAttack([0, 1])).toBe(true);
    expect(gameboard.isGameOver()).toBe(true);
});
