const houseOfCards = (numberOfFloors) => {
    if (typeof numberOfFloors !== 'number' || numberOfFloors === 0) return;
    return (3 * (Math.pow(numberOfFloors, 2) ) + numberOfFloors ) / 2;
};
console.log("houseOfCards:", houseOfCards(4))







const checkString1 = document.querySelector('.check-string-1');
const checkString2 = document.querySelector('.check-string-2');
const btnCheckString = document.querySelector('.btn-check-string');

const isStrEqual = (firstStr, secondStr, el) => {
    el.textContent = 'Are strings is equal?'
    // const str1 = String(firstStr.value).valueOf();
    // const str2 = String(secondStr.value).valueOf();
    const str1 = firstStr.value;
    const str2 = secondStr.value;
    if (str1 === '' || str2 === '') return ;
    let btnText =  btnCheckString.textContent;
    if (str1 === str2) {
        el.textContent = `${btnText} yes`
    } else if (str1 !== str2) {
        el.textContent = `${btnText} no`
    } else {
        el.textContent = `${btnText} error`
    }
}
btnCheckString.addEventListener('click', () => isStrEqual(checkString1, checkString2, btnCheckString))






// Promise - oczekuje na element

const btnGetelement = document.querySelector(".btn-get-element");
const text = document.querySelector(".text");

const onElementReady = (selector) => {
    return new Promise((resolve) => {
        var waitForElement = function () {
            const $element = document.querySelector(selector);
            if ($element) {
                resolve($element);
            } else {
                window.requestAnimationFrame(() => waitForElement());
            }
        };
        waitForElement();
    })
};

btnGetelement.addEventListener('click', () => {
    const span = document.createElement('span');
    span.classList.add('halo')
    span.textContent = " halloooo!"
    text.appendChild(span);
})

onElementReady('.halo')
    .then((el) => {
        el.style.backgroundColor = "silver";
    });







// ponoc przy nazwach class - dodaje kropki

const correctClass = document.getElementById("correctClass");
const copyModal = document.querySelector(".modal");
const resultClassName = document.getElementById("resultClassName");
const resultToLowerCase = document.getElementById("resultToLowerCase");

function change(e) {
    const correctClassValue = e.target.value;
    resultClassName.value = correctClassValue.charAt(0) === '.' ? `${correctClassValue.replace(/ /g, '.')} ` : `.${correctClassValue.replace(/ /g, '.')} `;
    resultToLowerCase.value = correctClassValue.toLowerCase();
}

function copyText(selector) {
    const copyText = document.getElementById(selector);
    if (copyText.value.length === 0) return;
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    correctClass.value = '';
    copyModal.classList.toggle('modal__hide')
    copyModal.classList.toggle('modal__copy');
    setTimeout(() => {
        copyModal.classList.toggle('modal__copy');
        copyModal.classList.toggle('modal__hide');
    }, 2000);
}

correctClass.addEventListener('input', change);

resultClassName.addEventListener('click', () => copyText("resultClassName"));
resultToLowerCase.addEventListener('click', () => copyText("resultToLowerCase"));







// wylistowanie tytulow ostatnio ogladanych projektow

let lastProject = document.querySelectorAll("ul.last-viewed-projects__items.js-last-viewed-projects-items > li")
lastProject.forEach(el => {
    console.log(el.querySelector("a").getAttribute('title'));
})






// dodanie styli

function addStyle() {
    const sheet = new CSSStyleSheet();
    sheet.insertRule(`
        h1 {
            color: green;
        }
    `);
    document.adoptedStyleSheets = [sheet]
}
addStyle();






// const correctClass = document.getElementById("correctClass");
// const resultClassName = document.getElementById("resultClassName");
// const btnConvert = document.getElementById("btnConvert");
//
//
// btnConvert.addEventListener('click', () => {
//     const correctClassValue = correctClass.value;
//     resultClassName.value = correctClassValue.charAt(0) === '.' ? `${correctClassValue.replace(/ /g, '.')} ` : `.${correctClassValue.replace(/ /g, '.')} `;
// });
//
// function copyText() {
//     var copyText = document.getElementById("resultClassName");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999)
//     document.execCommand("copy");
//     correctClass.value = '';
// }
//
// resultClassName.addEventListener('click', copyText);


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


// const array = ['lody', 'kiełbasa', 'zupa'];
//
// const value = 'zupa';
//
// const result = array.some(el => el === value);
// console.log(result);
//
