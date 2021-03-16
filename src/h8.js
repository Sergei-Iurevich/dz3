export function getTheDay() {
  const dateStr = prompt("Enter date in the format DD.MM.YYYY");
  const dd = dateStr[0] + dateStr[1];
  const mm = dateStr[3] + dateStr[4];
  const yyyy = dateStr[6] + dateStr[7] + dateStr[8] + dateStr[9];
  const date = new Date(`${mm} ${dd} ${yyyy}`);
  return date.getDay();
}

export function getNumberMinutes() {
  const dateNow = new Date();
  const hrs = dateNow.getHours();
  const mins = dateNow.getMinutes();
  console.log(hrs * 60 + mins);
  return hrs * 60 + mins;
}

export function searchYoungMan() {
  const dateOneMan = "12.12.1987";
  const dateTwoMan = "12.12.1985";
  function getDateMan(dateStr) {
    const [mm, dd, yyyy] = dateStr.split(".").map((item) => Number(item));
    const date = new Date(`${mm} ${dd} ${yyyy}`);
    return date;
  }
  const oneStamp = getDateMan(dateOneMan).getTime();
  const twoStamp = getDateMan(dateTwoMan).getTime();

  if (oneStamp < twoStamp) {
    return "two";
  }
  if (twoStamp < oneStamp) {
    return "one";
  }
  return "age equal";
}
