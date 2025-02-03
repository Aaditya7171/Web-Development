// var generateName = require('sillyname');

// import generateName from "sillyName";
// var sillyName = generateName();

// console.log(`My name is ${sillyName}.`);

// const superheroes = require("superheroes");
// var name = superheroes.randomSuperhero();
// console.log('My name is ' + name +'!');

// import superheroes from "superheroes";
// const superHeroName = superheroes.random();
// console.log(`I am ${superHeroName}!`);

import randomSuperhero from "superheroes";
const superHeroName = randomSuperhero(); // Access via .default
console.log(`I am ${superHeroName}!`);

// const superheroes = require('superheroes');
// const superHeroName = superheroes.random();
// console.log(`I am ${superHeroName}!`);