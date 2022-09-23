const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array.filter(number => number % 2 === 1));
console.log(array.filter(number => number % 2 === 0 || number % 5 === 0));
console.log(array.filter(number => number % 3 === 0).map(number => number * number));
console.log(array.filter(number => number % 5 === 0).map(number => number * number).reduce((total, number) => total + number));