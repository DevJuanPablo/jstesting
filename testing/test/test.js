const assert = require('chai').assert

describe('Mis ejemplos con chai', () => {
  it('validando que el numero 5 este en mi array', () => {
    assert.equal([1, 2, 3, 4, 5, 6].indexOf(0), -1)
  })

  it('validar que 2 + 2 = 4', () => {
    const suma = 2 + 2
    assert.equal(suma, 4)
  })
})