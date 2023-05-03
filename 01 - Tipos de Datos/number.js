console.log(1);

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(0 / 0); // NaN

console.log(1.0); // 1
console.log(127 === 127.0); // true

// Sintaxis de números

var a = new Number(1);

console.log(a); // 1
console.log(a === 1); // false
console.log(a.valueOf() === 1); // true

// Metodos de los números

a = 1.23356;
console.log(a.toFixed(2)); // 1.23
console.log(Number.isNaN(1)); // false
