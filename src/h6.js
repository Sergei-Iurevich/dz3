export function diff(num1, num2) {
  if (arguments.length) {
    if (typeof num1 !== "string" && typeof num2 !== "string") {
      const result = Math.max(num1, num2) - Math.min(num1, num2);
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
    // eslint-disable-next-line max-len
    if (
      (typeof a === "number" && typeof x === "number") ||
      (typeof a === "bigint" && typeof x === "bigint")
    ) {
      // eslint-disable-next-line no-restricted-properties
      return Math.pow(a, x);
    }
    return "incorrect parameters";
  }
  return "no arguments";
}
