const palindrome = word => {
  return new Promise((resolve, reject) => {
    if (!word) reject('La palabra esta vacia')
    
    const palabraInvertida = word.split('').reverse().join('')

    resolve(palabraInvertida)
  }) 
}

test('Quiero verificar que hola es igual a aloh', () => {
  return palindrome('hola')
    .then(str => {
      expect(str).toBe('aloh')
    })
})