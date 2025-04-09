const palindrome1 = word => {
  return new Promise((resolve, reject) => {
    if (!word) reject('La palabra esta vacia')
    
    const palabraInvertida = word.split('').reverse().join('')

    resolve(palabraInvertida)
  }) 
}

const palindrome2 = word => {
  return new Promise((resolve, reject) => {
    if (!word) reject('La palabra esta vacia')
    
    const palabraInvertida = word.split('').reverse().join('')

    resolve(palabraInvertida)
  }) 
}

test('verificacion', () => {
  expect(2 + 2).toBe(4)
})