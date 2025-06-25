let numbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]
let result = {};
for (let i = 1; i <= 9; i++) {
    result[i] = 0;
}
for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j <= 9; j++) {
        if (numbers[i] % j == 0) {
            result[j]++
        }
    }
}
console.log(result)