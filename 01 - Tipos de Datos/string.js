console.log('Hola soy un string');

console.log(new String('Hola soy un string'));
console.log(new String('Hola soy un string').valueOf());

console.log('Hola soy un string'.length);
console.log('Hola soy un string'.charAt(0));
console.log('Hola soy un string'.charAt(9));
console.log('Hola soy un string'[7]);

let a = 'a';
let b = 'b';

console.log(a + b);

if (a < b) {
	console.log('a es menor que b');
} else if (a > b) {
	console.log('a es mayor que b');
} else {
	console.log('a y b son iguales');
}

function isEquals(a, b) {
	return a.toUpperCase() === b.toUpperCase();
}
