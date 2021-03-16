export function checkDate() {
  const str = prompt("Enter a string");
  const strA = `^(?:0|1|2|3(?![2-9]))\\d(?<!00)(?:\\.(?=.*\\.)|`;
  const strB = `-(?=.*\\-))[0-1][0-2](?<!00)[\\.-]\\d{4}$`;
  const regexpDate = new RegExp(strA + strB);
  const regexpEmail = /^[-.\w]+@([\w-]+\.)+[\w-]+$/i;
  const regexpPhone = /^\+?\d\(\d{3}\)(?:-?\d){1,7}$/;
  const resDate = regexpDate.test(str);
  const resEmail = regexpEmail.test(str);
  const resPhone = regexpPhone.test(str);
  if (resDate) {
    return "Date";
  }
  if (resEmail) {
    return "Email";
  }
  if (resPhone) {
    return "Number phone";
  }
  return "Invalid string";
}
