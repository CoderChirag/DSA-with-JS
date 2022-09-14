const merge = (arr, l, m, r) => {
	const left = arr.slice(l, m);
	const right = arr.slice(m, r);
	let i = 0,
		j = 0,
		k = l;
	while (i < left.length && j < right.length) {
		if (left[i] <= right[j]) {
			arr[k++] = left[i++];
		} else {
			arr[k++] = right[j++];
		}
	}
	while (i < left.length) {
		arr[k++] = left[i++];
	}
	while (j < right.length) {
		arr[k++] = right[j++];
	}
};

const mergeSort = (arr, l, r) => {
	if (l < r - 1) {
		const mid = Math.floor((l + r) / 2);
		mergeSort(arr, l, mid);
		mergeSort(arr, mid, r);
		merge(arr, l, mid, r);
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
mergeSort(arr, 0, arr.length);
console.log(arr);
