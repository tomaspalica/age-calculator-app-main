const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const dateForm = document.querySelector(".date-form");
const liDay = document.querySelector(".days");
const liMonth = document.querySelector(".months");
const liYear = document.querySelector(".years");
dateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const curentDate = new Date();
  const curentDateDay = curentDate.getDate();
  const curentDateMonth = curentDate.getMonth();
  const curentDateYear = curentDate.getFullYear();
  if (Number(day.value) > 31 || Number(day.value) <= 0) {
    day.nextElementSibling.classList.remove("hidden");
    day.classList.add("red-border");
  }

  if (Number(month.value) > 12 || Number(month.value) <= 0) {
    month.nextElementSibling.classList.remove("hidden");
    month.classList.add("red-border");
  }

  if (Number(year.value) > curentDateYear || Number(year.value) <= 0) {
    year.nextElementSibling.classList.remove("hidden");
    year.classList.add("red-border");
  }

  if (Number(day.value) < 31 && Number(day.value) > 0) {
    day.nextElementSibling.classList.add("hidden");
    day.classList.remove("red-border");
  }
  if (Number(month.value) <= 12 && Number(month.value) > 0) {
    month.nextElementSibling.classList.add("hidden");
    month.classList.remove("red-border");
  }

  if (Number(year.value) <= curentDateYear && Number(year.value) > 0) {
    year.nextElementSibling.classList.add("hidden");
    year.classList.remove("red-border");
  }
  if (
    Number(day.value) > 31 ||
    Number(day.value) <= 0 ||
    Number(month.value) > 12 ||
    Number(month.value) <= 0 ||
    Number(year.value) > curentDateYear ||
    Number(year.value) <= 0
  ) {
    return;
  }
  const inputDate = new Date(`${year.value}/${month.value}/${day.value}`);
  console.log(inputDate);
  let resultDays = curentDateDay - inputDate.getDate();
  let resultMonths = curentDateMonth - inputDate.getMonth();
  let resultYear = curentDateYear - inputDate.getFullYear();
  console.log(resultMonths);
  if (resultYear < 0) {
    console.log("invalide Date");
  } else if (resultMonths > 0) {
    console.log("resultMonths > 0");
  } else if (resultMonths === 0 && resultDays >= 0) {
    console.log("result Monts ===0 &&");
  } else {
    resultYear -= 1;
    if (resultMonths <= 0) resultMonths = 12 + resultMonths;
  }
  if (resultDays < 0) {
    resultDays += 30;
    resultMonths -= 1;
  }

  console.log(Number(year.value));
  liDay.childNodes[0].innerHTML = `${resultDays}`;
  liMonth.childNodes[0].innerHTML = `${resultMonths}`;
  liYear.childNodes[0].innerHTML = `${resultYear}`;
});
