const subtract = require('../js/subtract')

test('subtracts two number', () => {
    expect(subtract(1, 3)).toBe(-2)
})