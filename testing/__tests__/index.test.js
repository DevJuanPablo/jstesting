const palindrome = word => {
  return new Promise((resolve, reject) => {
    if (!word) reject('La palabra esta vacia')
    
    const palabraInvertida = word.split('').reverse().join('')

    resolve(palabraInvertida)
  }) 
}

test('Quiero verificar que hola es igual a aloh', async () => {
  const response = await palindrome('hola')

  expect(response).toBe('aloh')
})