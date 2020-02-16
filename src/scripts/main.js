const arr = ['w', 'y', 'k', 'o', 'p'];
const eArr = arr[Symbol.iterator]();

for (const val of eArr) {
    console.log(val)
}
