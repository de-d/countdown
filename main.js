import { UI } from './modules/constants.js'
import { getDaySuffix, getHourSuffix, getYearSuffix } from './modules/timeFormat.js'
function formatTimeDifference(years, days, hours) {
  let formattedTime = '';

  if (years > 0) {
    formattedTime += years + getYearSuffix(years);
  }

  if (days > 0) {
    formattedTime += (formattedTime ? ' ' : '') + days + getDaySuffix(days);
  }

  if (hours > 0) {
    formattedTime += (formattedTime ? ' ' : '') + hours + getHourSuffix(hours);
  }

  return formattedTime;
}

function countdown() {
  const selectedDate = new Date(UI.FORM_DATE.value);
  const currentDate = new Date();

  const diffTime = selectedDate - currentDate;
  const years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
  const days = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const formattedTime = formatTimeDifference(years, days, hours);

  UI.TIME_LEFT.textContent = formattedTime;
}

function handleFormSubmit(event) {
  event.preventDefault();
  countdown();
}

UI.FORM_BTN.addEventListener('click', handleFormSubmit);