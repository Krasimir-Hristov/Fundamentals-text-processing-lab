function solve(text, word){
    let counter = 0;
for(let el of text.split(` `)){
    if(el === word){
        counter++;
    }
}
console.log(counter)
}
solve('This is a word and it also is a sentence',
'is')