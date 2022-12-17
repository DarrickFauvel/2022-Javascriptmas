/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
  "smile": "😊",
  "angry": "😠",
  "party": "🎉",
  "heart": "💜",
  "cat":   "🐱",
  "dog":   "🐕"
}

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/ 

const getCharacters = word => word.split('')

const isValidEmojiCode = characters => (
  characters[0] === ':' && characters[characters.length - 1] === ':'
)

const getTrimmedWord = word => word.slice(1, -1)

const isAvailableEmoji = word => word in emojis

const getEmoji = word => emojis[word]



function emojifyWord(word){
  const characters = getCharacters(word)

  if (isValidEmojiCode(characters)) {
    const trimmedWord = getTrimmedWord(word)
    
    if (isAvailableEmoji(trimmedWord)) {
      return getEmoji(trimmedWord)
    }
    return trimmedWord
  }
  return word
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/ 

function emojifyPhrase(phrase){
  return phrase.split(' ').map(word => {
    if (isValidEmojiCode) {
      return emojifyWord(word)
    }
    return word
  }).join(' ');
}



console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));
console.log(emojifyPhrase("I :heart: my :flower:"));
