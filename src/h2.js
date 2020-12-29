function task1() {
  const a = 4;
  const b = 5;
  if (a > b) {
    console.log(a);
  } else if (b > a) {
    console.log(b);
  } else {
    console.log("numbers are equal");
  }
}

function task2() {
  const x = +prompt("Enter a number from 1 to 12");
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

function task3() {
  const circle = 12.56;
  const square = 16;
  if (circle <= (square * Math.PI) / 4) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

module.exports = { task1, task2, task3 };
