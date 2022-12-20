import { Ship } from "./ship";

const Gameboard = () => {
    const _board = Array.from(Array(10), () => {
        return Array.from(Array(10), () => {
            return {
                ship: null,
                hit: false
            };
        });
    });

    let _shipsAlive = 0;

    const _arePlaceShipCoordsValid = (length, coords) => {
        if (length != coords.length) return false;

        for (const [x, y] of coords) {
            if (_board[x] == undefined ||
                _board[x][y] == undefined ||
                _board[x][y].ship) {
                return false;
            }
        }

        return true;
    };

    const placeShip = (length, ...coords) => {
        if (!_arePlaceShipCoordsValid(length, coords)) {
            return false;
        }

        const ship = Ship(length);

        for (const [x, y] of coords) {
            _board[x][y].ship = ship;
        }

        _shipsAlive++;

        return true;
    };

    const _areReceiveAttackCoordsValid = (coord) => {
        const [x, y] = coord;
        return _board[x] != undefined &&
            _board[x][y] != undefined &&
            _board[x][y].hit == false;
    }

    const receiveAttack = (coord) => {
        if (!_areReceiveAttackCoordsValid(coord)) return false;

        const [x, y] = coord;
        const cell = _board[x][y];

        cell.hit = true;

        if (cell.ship) {
            cell.ship.hit();

            if (cell.ship.isSunk()) {
                _shipsAlive--;
            }
        }

        return true;
    };

    const isGameOver = () => _shipsAlive == 0;

    return {
        placeShip,
        receiveAttack,
        isGameOver
    }
};

export { Gameboard };
