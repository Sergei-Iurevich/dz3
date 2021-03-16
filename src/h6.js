export function diff(num1, num2) {
  if (arguments.length) {
    if (typeof num1 !== "string" && typeof num2 !== "string") {
      const result = Math.abs(num1 - num2);
      return result;
    }
    return "incorrect parameters";
  }
  return "no arguments";
}

export function isWord(str) {
  if (arguments.length) {
    if (typeof str === "string") {
      const regexp = /\w\s\w/;
      const result = regexp.test(str);
      if (!result) {
        return true;
      }
      return false;
    }
    return "incorrect parameters";
  }
  return "no arguments";
}

export function pow(a, x) {
  if (arguments.length) {
    if (
      (typeof a === "number" && typeof x === "number") ||
      (typeof a === "bigint" && typeof x === "bigint")
    ) {
      return a ** x;
    }
    return "incorrect parameters";
  }
  return "no arguments";
}
