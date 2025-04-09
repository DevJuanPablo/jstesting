const palindrome = word => word
  .split('')
  .reverse()
  .join('')

test('Quiero verificar que hola es igual a aloh', () => {
  expect(palindrome('hola')).toBe('alo')
})