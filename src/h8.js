export function getTheDay() {
  const dateStr = prompt("Enter date in the format DD.MM.YYYY");
  const dd = dateStr[0] + dateStr[1];
  const mm = dateStr[3] + dateStr[4];
  const yyyy = dateStr[6] + dateStr[7] + dateStr[8] + dateStr[9];
  const date = new Date(`${mm} ${dd} ${yyyy}`);
  return date.getDay();
}

export function getHrs() {
  const dateNow = new Date();
  const hrs = dateNow.getHours();
  const mins = dateNow.getMinutes();
  console.log(hrs * 60 + mins);
}

export function searchYoungMan() {
  const dateOneMan = "12.12.1887";
  const dateTwoMan = "12.12.1987";
  function getDateMan(dateStr) {
    const dd = dateStr[0] + dateStr[1];
    const mm = dateStr[3] + dateStr[4];
    const yyyy = dateStr[6] + dateStr[7] + dateStr[8] + dateStr[9];
    const date = new Date(`${mm} ${dd} ${yyyy}`);
    return date;
  }
  const oneStamp = getDateMan(dateOneMan).getTime();
  const twoStamp = getDateMan(dateTwoMan).getTime();

  console.log("oneStamp", oneStamp);
  console.log("twoStamp", twoStamp);

  if (oneStamp < twoStamp) {
    console.log("two");
  } else if (twoStamp < oneStamp) {
    console.log("one");
  } else {
    console.log("age equal");
  }
}
