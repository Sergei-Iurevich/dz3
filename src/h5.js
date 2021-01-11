export function task1() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = arr.reduce((sum, current) => sum + current, 0);
  console.log(result);
}

export function task2(arr) {
  const arr1 = arr.map((item) => item * 2);
  return arr1;
}

export function task3(array) {
  if (array.length !== 0) {
    let min = array[0];
    let max = array[0];
    for (let i = 1; i <= array.length; i++) {
      if (min > array[i]) {
        min = array[i];
      }

      if (max < array[i]) {
        max = array[i];
      }
    }
    const resArray = [];
    resArray.push(min);
    resArray.push(max);
    return resArray;
  }
  return "Array is empty";
}
