const insertionSort = arr => {
	for (let i = 1; i < arr.length; i++) {
		const currVal = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currVal;
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
insertionSort(arr);
console.log(arr);
