import "../styles/Calendar.css";
import SplitDate from "./SplitDate"
import { useMemo } from "react";
/**
 * Returns a calendar.
 *
 * Expects the following parameters to be passed in through props
 * @param {int} month (0 to 11)
 * @param {int} year
 * @returns <Calendar/>
 */

export default function Calendar(props) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const makeCalendar = () => {
    const date = new Date(props.year, props.month, 1);
    let ret = [];
    let weeks = ["S", "M", "T", "W", "T", "F", "S"];

    // what day the first of the month starts on (0-6)
    let n = date.getDay();

    // # of days in month
    let t = new Date(props.year, props.month + 1, 0).getDate();

    // # of days leftover in 5 weeks that are not in current month
    let k = 7 - ((t + n) % 7);

    // day of week headers
    for (const day of weeks)
      ret.push(
        <div className="calendar-dayofweek calendar-cell center"> {day} </div>
      );

    // the previous month, if there are any spare days 
    ret.push(
      n > 0 && 
      <div
        className="calendar-date-inactive center"
        style={{ gridColumn: `span ${n}` }}
        onClick={() => {
          if (props.month == 0){
            props.setArgs({
              month: 11,
              year: props.year - 1
            })
          }
          else props.setArgs({
            month: props.month - 1,
            year: props.year
          })
        }}
      >
        {n < 3
          ? months[mod(props.month - 1, 12)].substring(0, 3).toUpperCase()
          : months[mod(props.month - 1, 12)].toUpperCase()}
      </div>
    );

    // build the first 4 rows
    for (let i = 1; i <= 28-n; i++)
      ret.push(<div className="calendar-date calendar-cell"> {i} </div>);
    
    let nextDay = 28 - n + 1;

    // if we need to add splitDates
    let v = 0;
    if (n + t > 35){
      // # of splitDates
      v = (n + t) % 35;
      for (let i = 0; i < v; i++){
        ret.push(<SplitDate top = {nextDay} bottom = {nextDay + 7}/>);
        nextDay++;
      }
    }
 
    // fill in the rest of the calendar
    for (let i = nextDay; i <= t-v; i++){
      ret.push(<div className = "calendar-date calendar-cell"> {i} </div>)
    }
    
  
    // fill in the rest of the calendar with blanks
    ret.push(
      (n+t<35) && 
      <div
        className="calendar-date-inactive center"
        style={{ gridColumn: `span ${k}` }}
        onClick={() => {
          if (props.month == 11){
            props.setArgs({
              month: 0,
              year: props.year + 1
            })
          }
          else props.setArgs({
            month: props.month + 1,
            year: props.year
          })
        }}
      >
        {k < 3
          ? months[(props.month + 1) % 12].substring(0, 3).toUpperCase()
          : months[(props.month + 1) % 12].toUpperCase()}
      </div>
    );

    return ret;
  };
  // only need to recompute the calendar if the month / year changes
  const calendar = useMemo(() => makeCalendar(), [props.month, props.year]);
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="calendar-month calendar-header-item">
          {months[props.month]}
        </div>
        <div className="calendar-year calendar-header-item">{props.year}</div>
      </div>
      <div className="calendar-grid">{calendar}</div>
    </div>
  );
}

// for some reason, javascript mod is not well defined for negatives
function mod(n, m) {
  return ((n % m) + m) % m;
}
