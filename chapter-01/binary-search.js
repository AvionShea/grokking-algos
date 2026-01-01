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

//C++ Solution
#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector <int> arr, int number){
int low = 0;
int high = arr.size() - 1;

    while (low <= high) {
        int mid = (low + high) / 2;
        int guess = arr[mid];

        if (guess == number) {
            return mid;
        } else if (guess > number) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

int main(){
    vector <int> myArrList = { 1, 3, 5, 7, 9 };

    cout << binarySearch(myArrList, -1) << " (expected: -1)" << endl;
    cout << binarySearch(myArrList, 5) << " (expected: 2)" << endl;
    cout << binarySearch(myArrList, 1) << " (expected: 0)" << endl;

    return 0;
}