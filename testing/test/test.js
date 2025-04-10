const assert = require('chai').assert

describe('Mis ejemplos con chai', () => {
  it('validando que el numero 5 este en mi array', () => {
    assert.equal([1, 2, 3, 4, 5, 6].indexOf(0), 4)
  })
})