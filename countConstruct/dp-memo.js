const countConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let totalCount = 0;

    for (word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length),wordBank, memo);
            totalCount += numWaysForRest;
        }
    }

    memo[target] = totalCount;
    return totalCount;
};

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstruct("abcdef",["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("skateboard",["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(countConstruct("enterapotentpot",["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeeee","eeeeee"])); // takes long time

// O(n * m * m)
// O(m * m)