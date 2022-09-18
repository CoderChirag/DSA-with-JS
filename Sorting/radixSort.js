const countDigits = n => {
	if (n == 0) return 1;
	return Math.floor(Math.log10(n)) + 1;
};

const getDigit = (num, i) => {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const mostDigits = arr => {
	let maxDigits = 0;
	for (let i = 0; i < arr.length; i++) {
		maxDigits = Math.max(maxDigits, countDigits(arr[i]));
	}
	return maxDigits;
};

const radixSort = arr => {
	let maxDigits = mostDigits(arr);
	for (let i = 0; i < maxDigits; i++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let j = 0; j < arr.length; j++) {
			digitBuckets[getDigit(arr[j], i)].push(arr[j]);
		}
		arr = [].concat(...digitBuckets);
	}
	return arr;
};

const generateNewArray = length => {
	const newArray = [];
	for (let i = 0; i < length; i++) {
		newArray.push(Math.floor(Math.random() * length * 5) + 1);
	}
	return newArray;
};

let arr = generateNewArray(10);
console.log(arr);
arr = radixSort(arr);
console.log(arr);
