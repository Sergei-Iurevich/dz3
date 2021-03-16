export function sumNumber() {
  let sum = 0;
  for (let i = 50; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
}

export function multiplicationTable() {
  for (let i = 1; i < 10; i++) {
    console.log(i * 7);
  }
}

export function average() {
  const n = Number(prompt("Enter a number"));
  let amtOddNumbers = 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      amtOddNumbers += 1;
      sum += i;
    }
  }

  const aver = sum / amtOddNumbers;
  console.log(aver);
}
