// Archivo principal
import  { isVowel }  from "./isVowel.test.js"
import assert from 'node:assert'

console.assert(isVowel('b', 'b no es una vocal'))
console.assert(isVowel('a', 'a es una vocal'))

try {
  assert.ok(isVowel('a'))
  assert.equal(isVowel('d'), true)
} catch (error) {
  console.error(error.message)
}