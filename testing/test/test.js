import assert from 'node:assert'

describe('Mis ejemplos con mocha', () => {
  it('validando que el numero 5 este en mi array', () => {
    assert.equal([1, 2, 3, 4, 5, 6].indexOf(0), -1)
  })
})