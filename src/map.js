/*

PRACTICE OF MAP METHODS 

Challenge 1: given an array of numbers return an array of each number squared
*/
const num = [1, 2, 3, 4, 5];
// Output required --> [1, 4, 9, 16, 25]
const squared = num.map(function (item) {
    // console.log(i);
    return item * item;
});
// console.log(squared);

/*
    Challenge 2: given an array of strings, return an array where the first letter of each string is capitalized.
*/
const names = ["alice", "bob", "charlie"];
// Output required --> ["Alice", "Bob", "Charlie"]
const capital = names.map(function(item) {
    return item[0].toUpperCase() + item.slice(1);
})
// console.log(capital);

/*
    Challenge 3: given an array of string return an array of strings that wraps each of the original strings in an HTML-like<p></p> tag.

    eg given: ["Bulbasur", "Charmander", "Squirtle"]
    return:   ["<p>Bulbasur</p>", "<p>Charmander</p>", "Squirtle"]
    
*/ 
const pokemon = ["Bulbasur", "Charmander", "Squirtle"];

const change = pokemon.map((pk) => {
    return `<p>${pk}</p>`;
})
console.log(change);
