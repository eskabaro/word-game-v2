import { fail } from 'assert'

import { WORDS_L6 } from './wordlist'

// You may not want the list of solutions to be unique. In that case, disable this test
describe('wordlist', () => {
  test('words are unique', () => {
    const uniqueWords = Array.from(new Set(WORDS_L6))

    expect(WORDS_L6.length).toEqual(uniqueWords.length)

    if (uniqueWords.length !== WORDS_L6.length) {
      uniqueWords.forEach((w) => {
        const ww = WORDS_L6.filter((x) => x === w)
        if (ww.length > 1) {
          fail(`The word ${w} is not unique.`)
        }
      })
    }
  })
})
