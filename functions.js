// function Key workd

function sum(x, y) {
	return x + y;
}

const x = 10;
const y = 15;
const z = sum(x, y);

console.log(z);

// Arrow Functions

const sum2 = (x, y) => x + y;

console.log(sum2(x, y));

// Arrow Function with return

const sum3 = (x, y) => {
	const lessx = x - 3;

	return lessx + y;
};

console.log(sum3(x, y));
