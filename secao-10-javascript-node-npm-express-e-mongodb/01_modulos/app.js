const randomWord = (words) => {
  return words[Math.floor(Math.random() * words.length)]

} 

module.exports = {randomWord}