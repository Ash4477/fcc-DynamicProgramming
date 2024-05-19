const howSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const currArr = howSum(remainder,numbers,memo);
        if (currArr !== null) {
            currArr.push(num);
            memo[targetSum] = currArr;
            return currArr;
        }
    }
    memo[targetSum] = null;
    return null;
};

console.log(howSum(7, [2,3]));
console.log(howSum(7, [5,3,4,7]));
console.log(howSum(7, [2,4]));
console.log(howSum(8, [2,3,5]));
console.log(howSum(300, [7,14]));

// let m = targetSum, n = arraylength
// Time Complexity: O(n*m)
// Space Complexity: O(m*m) m key with at most m element array