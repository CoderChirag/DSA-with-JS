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