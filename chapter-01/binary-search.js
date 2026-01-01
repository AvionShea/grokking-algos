//JavaScript Solution
function binarySearch(arr, number) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = arr[mid];

        if (guess === number) {
            return mid;
        } else if (guess > number) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
}

const myArrList = [1, 3, 5, 7, 9];

console.log(binarySearch(myArrList, -1), null);
console.log(binarySearch(myArrList, 5), 2);
console.log(binarySearch(myArrList, 1), 0);