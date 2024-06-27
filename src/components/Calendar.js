import "../styles/Calendar.css";
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
    let n = date.getDay();
    let t = new Date(props.year, props.month + 1, 0).getDate();
    let k = 7 - ((t + n) % 7);

    console.log(props.month);
    console.log(mod(props.month - 1, 12));
    // day of week headers
    for (const day of weeks)
      ret.push(
        <div className="calendar-dayofweek calendar-cell center"> {day} </div>
      );
    if (n > 0)
      ret.push(
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

    // days of the current month
    for (let i = 1; i <= t; i++)
      ret.push(<div className="calendar-date calendar-cell"> {i} </div>);

    // fill in the rest of the calendar with blanks
    ret.push(
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
