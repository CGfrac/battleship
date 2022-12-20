import { Ship } from "../src/js/ship";

const ship = Ship(2);

test('Ship must be of the specified length (2)', () => {
    expect(ship.getLength()).toBe(2);
});

test('Calling hit() on the ship increases the hits counter', () => {
    expect(ship.hit()).toBe(1);
});

test('isSunk() should return false as long as ship isn\'t hit twice', () => {
    expect(ship.isSunk()).toBe(false);
});

test('Hitting the ship a second time will make isSunk() true', () => {
    expect(ship.hit()).toBe(2);
    expect(ship.isSunk()).toBe(true);
});
