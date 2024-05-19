const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let bestArr = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);

        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            if (bestArr === null || combination.length < bestArr.length) {
                bestArr = combination;
            }
        }
    }

    memo[targetSum] = bestArr;
    return bestArr;
};

console.log(bestSum(7, [5,3,4,7]));
console.log(bestSum(8, [2,3,5]));
console.log(bestSum(8, [1,4,5]));
console.log(bestSum(100, [1,2,5,25]));

// let m = targetSum, n = array length
// Time Complexity: O(m * n * m) or O(m^2 * n)
// Space Complexity: O(m * m) or O(m^2) bestArr array on each stack, so extra m