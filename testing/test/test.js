const assert = require('chai').assert
const should = require('chai').should()
const expect = require('chai').expect
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

describe('Mis ejemplos con chai', () => {
  it('validando que el numero 5 este en mi array', () => {
    assert.equal([1, 2, 3, 4, 5, 6].indexOf(0), -1)
  })

  it('validar que 2 + 2 = 4', () => {
    const suma = 2 + 2
    assert.equal(suma, 4)
  })

  it('validar la cantidad de elementos', () => {
    const array = [10, 20, 30, 40]

    array.should.have.lengthOf(4)
  })

  it('validando que holaMundo sea un string', () => {
    const holaMundo = 'hola mundo'

    holaMundo.should.be.a('string')
  })

  it('Validar la existencia de una propiedad de un objeto', () => {
    const jwt = {
      expireIn: new Date(),
      user: 'Adrian',
      server: 'server'
    }

    expect(jwt).to.have.property('user')
  })

  it('Verificando promesas', () => {
    return Promise.resolve(2 + 2).should.eventually.equal(4)
  })
})