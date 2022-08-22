const bubbleSort = arr => {
	let noSwap;
	for (let i = 0; i < arr.length; i++) {
		noSwap = true;
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				noSwap = false;
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
		if (noSwap) break;
	}
};

const generateNewArray = length => {
	const newArray = [];
	for (let i = 0; i < length; i++) {
		newArray.push(Math.floor(Math.random() * length * 5) + 1);
	}
	return newArray;
};

const arr = generateNewArray(10);
console.log(arr);
bubbleSort(arr);
console.log(arr);
