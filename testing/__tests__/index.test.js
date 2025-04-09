test('Quiero verificar la igualdad de un objeto', () => {
  const obj = { one: 1 }
  const objCompare = { one: 1 }

  obj.two = 2

  expect(obj).toEqual(objCompare)
})