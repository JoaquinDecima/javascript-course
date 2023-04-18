// Muestro el valor primitivo true
console.log(true);
// Muestro el valor primitivo false
console.log(false);

// Mreo un objeto Boolean con parametro true
console.log(new Boolean(true));
// Mreo un objeto Boolean con parametro false
console.log(new Boolean(false));

// Creo un objeto Boolean con parametro false
let miBool = new Boolean(false);

// Realizo un If con el objeto miBoolean
if (miBool) {
	console.log(' \n \n No deberia ejecutarme \n \n');
}

// Realizo un new Boolean con un new Boolean en false como argumento
console.log(new Boolean(new Boolean(false)));

// Realizo un If con el valor de miBoolean
if (miBool.valueOf()) {
	console.log(' \n \n Esto efectivamente no se ejecuta \n \n');
}

// || 'or' (o logico)  && 'and' (y logico)

console.log(true || false);
console.log(false || false);
console.log(false || true);
console.log(true || true);

console.log(true && false);
console.log(false && false);
console.log(false && true);
console.log(true && true);

// ! negacion

console.log(!true);
console.log(!false);
