const talkingCalendar = function(date)
{
  let year = date.slice(0, 4);
  let month = date.slice(5, 7);
  let day = date.slice(8, 10);
  let suffix;
  switch (month)
  {
    case "01": month = "January ";
    case "02": month = "February ";
    case "03": month = "March ";
    case "04": month = "April ";
    case "05": month = "May ";
    case "06": month = "June ";
    case "07": month = "July ";
    case "08": month = "August ";
    case "09": month = "September ";
    case "10": month = "October ";
    case "11": month = "November ";
    case "12": month = "December ";
  }
  switch (day)
  {
    case "01": suffix = "st, ";
    case "02": suffix = "nd, ";
    case "03": suffix = "rd, ";
    case "21": suffix = "st, ";
    case "22": suffix = "nd, ";
    case "23": suffix = "rd, ";
    case "31": suffix = "st, ";
    default: suffix = "th, ";
  }
  return month + day + suffix + year;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));