function myFunction() {
    var str = "Is this all there is?";
    var patt1 = /[ha]/g;
    var result = str.match(patt1);
    console.log(result);
}

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join('--'));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

myFunction();

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
