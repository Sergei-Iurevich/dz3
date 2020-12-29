function task1() {
  // eslint-disable-next-line no-plusplus
  let sum = 0;
  for (let i = 50; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
}

function task2() {
  for (let i = 1; i < 10; i++) {
    console.log(i * 7);
  }
}

function task3() {
  const n = +prompt("Enter a number");
  let amtOddNumbers = 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      amtOddNumbers++;
      sum += i;
    }
  }
  const average = sum / amtOddNumbers;
  console.log(average);
}

module.exports = { task1, task2, task3 };
