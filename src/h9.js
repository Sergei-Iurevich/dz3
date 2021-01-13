export function isRightTriangle(num1, num2, num3) {
  const hypotenuse = Math.max(num1, num2, num3);
  let sideA;
  let sideB;

  if (num1 === hypotenuse) {
    sideA = num2;
    sideB = num3;
  } else if (num2 === hypotenuse) {
    sideA = num1;
    sideB = num3;
  } else {
    sideA = num1;
    sideB = num2;
  }

  if (hypotenuse ** 2 === sideA ** 2 + sideB ** 2) {
    return "yes";
  }
  return "no";
}

export function task2() {
  const r = +prompt("Enter number");
  const l = 2 * Math.PI * r;
  const s = Math.PI * r ** 2;
  console.log(+l.toFixed(2), +s.toFixed(2));
}

export function quadraticRoots(a, b, c) {
  if (a !== 0) {
    const d = b ** 2 - 4 * a * c;
    let x1;
    let x2;
    let x;
    if (d > 0) {
      x1 = ((-b + Math.sqrt(d)) / 2) * a;
      x2 = ((-b - Math.sqrt(d)) / 2) * a;
      return [x1, x2];
    }
    if (d === 0) {
      x = (-b / 2) * a;
      return x;
    }
    return "no roots";
  }
  return "the coefficient must be non-zero";
}
