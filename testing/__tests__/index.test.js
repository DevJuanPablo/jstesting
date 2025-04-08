const nombres = ['Adrian', 'Cintia', 'Adriel', 'Cinthia']

test('Queremos verificar que el nombre Adriel se encuentre en el array', () => {
  expect(new Set(nombres)).toContain('Adriel')
})