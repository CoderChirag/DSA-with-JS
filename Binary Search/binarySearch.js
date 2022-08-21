const binarySearch = (arr, target) => {
	let l = 0;
	let r = arr.length - 1;
	while (l <= r) {
		let mid = Math.floor((l + r) / 2);
		if (arr[mid] === target) {
			return mid;
		} else if (arr[mid] < target) {
			l = mid + 1;
		} else {
			r = mid - 1;
		}
	}
	return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(binarySearch([1, 2, 3, 4, 6, 7, 8, 9, 10], 5));
