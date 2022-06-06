function solve(text, word){
let wordL = word.length;


while(text.includes(word)){
text = text.replace(word, `*`.repeat(wordL))
}
console.log(text)
}
solve('A small sentence with some words small', 'small')