import { Player } from "../src/js/player";

const player1 = Player();
const player2 = Player(true);

test('Attacking player with wrong coord should return false', () => {
    expect(player1.attack(player2, -1, 0)).toBe(false);
});

test('Attacking player with correct coord should return true', () => {
    expect(player1.attack(player2, 0, 0)).toBe(true);
});

test('player2 has its own behavior as AI', () => {
    expect(player2.attack(player1)).toBe(true);
});
