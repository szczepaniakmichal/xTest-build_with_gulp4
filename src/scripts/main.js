// const container = document.querySelector('.container');
// const btn = document.querySelector("body > button");
//
// btn.addEventListener('click', function () {
//     const offSetY100 = (window.pageYOffset) + (window.innerHeight / 2) - (btn.offsetHeight / 2);
//     console.log(offSetY100);
//     container.style.transform = `translate(0, ${offSetY100}px)`;
// });
//
// window.addEventListener('scroll', function () {
//     const offSetY100 = (window.pageYOffset) + (window.innerHeight / 2) - (btn.offsetHeight / 2);
//     container.style.transform = `translate(0, ${offSetY100}px)`;
// });


// const promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('foo');
//     }, 7000);
// });
//
//
// promise1.then(function(value) {
//     console.log(value);
//     // expected output: "foo"
// });
//
// console.log(promise1);
// // expected output: [object Promise]


// const btn = document.querySelector("body > button");
//
// const array = [];
//
// let count = 0;
//
// btn.addEventListener('click', function () {
//     array.push(count);
//     count++;
//     if (array.length > 4) {
//         array.shift();
//     }
//     console.log(array);
// });
//
// const array1 = [5, 8, 99, 120, 32, 831];
//
// const found = array1.filter(element => element % 3 === 0);
//
//
// console.log(found);
// expected output: 12


// function myFunction() {
//     var str = "Is this all there is?";
//     var patt1 = /[ha]/g;
//     var result = str.match(patt1);
//     console.log(result);
// }
//
// const elements = ['Fire', 'Air', 'Water'];
//
// console.log(elements.join());
// // expected output: "Fire,Air,Water"
//
// console.log(elements.join('--'));
// // expected output: "FireAirWater"
//
// console.log(elements.join('-'));
// // expected output: "Fire-Air-Water"

// myFunction();


// const numberGenerator = (howManyNumber) => {
//     // return [...Array(howManyNumber)].map(e=>~~(Math.random()*howManyNumber))
//
//     const randomNumbers = [];
//
// do {
//     const number = Math.floor(Math.random() * howManyNumber+1);
//     console.log(number);
//
//     if (randomNumbers.length === 0) {
//         randomNumbers.push(number);
//     }
//
//     randomNumbers.forEach((el) => {
//         console.log(randomNumbers);
//         if (el !== number) {
//             randomNumbers.push(number);
//         }
//     });
// }
//
// while (randomNumbers.length < howManyNumber);
//
// return randomNumbers;
//
// };
//
// const arr1 = numberGenerator(5);
// console.log(arr1);


// const arr2 = numberGenerator(5);
// console.log(arr2);
//
// const arr3 = numberGenerator(5);
// console.log(arr3);
//
// const arr4 = numberGenerator(5);
// console.log(arr4);

const array = ['lody', 'kiełbasa', 'zupa'];

const value = 'zupa';

const result = array.some(el => el === value);
console.log(result);

