const Ship = length => {
    const _length = length;
    let _hits = 0;

    const getLength = () => _length;

    const hit = () => ++_hits;
    const isSunk = () => _hits >= _length;

    return {
        getLength,
        hit,
        isSunk
    };
};

export { Ship };
