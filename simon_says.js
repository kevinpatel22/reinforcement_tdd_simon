const echo = (word) => {
  return word;
};

const shout = (word) => {
  return word.toUpperCase();
};

const repeat = (word, num) => {
  return ((word + ' ').repeat(num).trim());
};

const startOfWord = (word, num) => {
  return word.substring(word, num);
};

const firstWord = (word, num) => {
  return word.split(' ')[0];
};



module.exports = {echo: echo, shout: shout, repeat: repeat, startOfWord: startOfWord, firstWord: firstWord};

