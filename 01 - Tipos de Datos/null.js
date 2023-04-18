console.log(null);

console.log(null == undefined);
console.log(null === undefined);

console.log(typeof null);
console.log(typeof undefined);

function getVowels(str) {
	const m = str.match(/[aeiou]/gi);
	if (m === null) {
		return 0;
	}
	return m.length;
}

console.log(getVowels('sky'));
