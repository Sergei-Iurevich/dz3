function run1() {
  const a = 3;
  const b = 7;
  console.log(a + b);
  console.log(a * b);
}

function run2() {
  const str1 = "asas";
  const str2 = "et";
  console.log(str1.length + str2.length);
}

function run3() {
  const x = prompt("enter a three-digit number");
  const a = Number(x[0]);
  const b = Number(x[1]);
  const c = Number(x[2]);
  console.log(a + b + c);
}

module.exports = { run1, run2, run3 };
