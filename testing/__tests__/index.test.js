var holaMundo = 'Hola Mundo'

test('Que la palabra hola este dentro de mi variable holaMundo', () => {
  expect(holaMundo).not.toMatch(/cola/)
})