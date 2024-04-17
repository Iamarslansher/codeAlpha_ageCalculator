function calculateAge() {
  var dob = new Date(document.getElementById("dob").value);
  var today = new Date(document.getElementById("curntDate").value);

  var dobYear = dob.getFullYear();
  var dobMonth = dob.getMonth();
  var dobDate = dob.getDate();

  var todatYear = today.getFullYear();
  var todayMonth = today.getMonth();
  var todayDate = today.getDate();

  // YEAR-DIFF
  var yearDiff = todatYear - dobYear;

  // MONTH-DIFF
  var monthDiff;
  if (todayMonth >= dobMonth) {
    monthDiff = todayMonth - dobMonth;
  } else {
    yearDiff--;
    monthDiff = dobMonth - todayMonth;
  }

  // DAY-DIFF
  var dateDiff;
  if (todayDate >= dobDate) {
    dateDiff = todayDate - dobDate;
  } else {
    monthDiff--;
    dateDiff = dobDate - todayDate;
  }

  document.getElementById(
    "result"
  ).innerText = `Your age is: ${yearDiff} Years, ${monthDiff} Months, and ${dateDiff} Days. `;
}
