test('Quiero verificar que 2 + 2 = 4', () => {
  expect(2 + 2).toBe(4)
})

test('Quiero verificar que 2+2=4 pero usando toEqual()', () => {
  expect(2 + 2).toEqual(4)
})

test('Quiero verificar que 5 es mayor 1u3 4', () => {
  expect(5).toBeGreaterThan(4)
})