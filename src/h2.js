export function maxOfTwoNumber() {
  const a = Number(prompt("Enter first a number"));
  const b = Number(prompt("Enter second a number"));
  if (a > b) {
    console.log(a);
  } else if (b > a) {
    console.log(b);
  } else {
    console.log("numbers are equal");
  }
}

export function outputMonth() {
  const x = Number(prompt("Enter a number from 1 to 12"));
  switch (x) {
    case 1:
      console.log("Январь");
      break;
    case 2:
      console.log("Февраль");
      break;
    case 3:
      console.log("Март");
      break;

    case 4:
      console.log("Апрель");
      break;
    case 5:
      console.log("Май");
      break;
    case 6:
      console.log("Июнь");
      break;

    case 7:
      console.log("Июль");
      break;

    case 8:
      console.log("Август");
      break;

    case 9:
      console.log("Сентябрь");
      break;

    case 10:
      console.log("Октябрь");
      break;
    case 11:
      console.log("Ноябрь");
      break;
    default:
      console.log("Декабрь");
  }
}

export function circleIntoSquare() {
  const circle = Number(prompt("Enter a area of a circle"));
  const square = Number(prompt("Enter a area of a square"));
  if (circle <= (square * Math.PI) / 4) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
