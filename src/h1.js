export function multiplicationAndSum() {
  const a = Number(prompt("Enter first number"));
  const b = Number(prompt("Enter second number"));
  console.log(a + b);
  console.log(a * b);
}

export function sumLenStrings() {
  const str1 = prompt("Enter first string");
  const str2 = prompt("Enter second string");
  console.log(str1.length + str2.length);
}

export function sumDigital() {
  const x = prompt("enter a three-digit number");
  const a = Number(x[0]);
  const b = Number(x[1]);
  const c = Number(x[2]);
  console.log(a + b + c);
}
