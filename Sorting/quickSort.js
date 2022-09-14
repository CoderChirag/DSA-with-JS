const partition = (arr, low, high) => {
	const pivot = low;
	let swapIdx = low;
	for (let i = low + 1; i < high; i++) {
		if (arr[i] < arr[pivot]) {
			swapIdx++;
			[arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
		}
	}
	[arr[pivot], arr[swapIdx]] = [arr[swapIdx], arr[pivot]];
	return swapIdx;

	// -------------------------------- Alternative Method -----------------------------------------
	// const pivot = low;
	// let i = low + 1;
	// let j = high - 1;
	// while (i <= j) {
	// 	while (i < high - 1 && arr[i] < arr[pivot]) i++;
	// 	while (j > low && arr[j] > arr[pivot]) j--;
	// 	if (i < j) {
	// 		[arr[i], arr[j]] = [arr[j], arr[i]];
	// 	} else if (i == j) {
	// 		break;
	// 	}
	// }
	// [arr[pivot], arr[j]] = [arr[j], arr[pivot]];
	// return j;
};

const recursiveQuickSort = (arr, low, high) => {
	if (low >= high) return;
	const mid = partition(arr, low, high);
	recursiveQuickSort(arr, low, mid);
	recursiveQuickSort(arr, mid + 1, high);
};

const quickSort = arr => {
	recursiveQuickSort(arr, 0, arr.length);
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
quickSort(arr);
console.log(arr);
