function generateOddSeries(a) {
  let result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }
  return result.join(', ');
}

let input = 4;
console.log("Output:", generateOddSeries(input));
