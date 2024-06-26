import "../styles/Calendar.css";

/**
 * Returns a calendar.
 *
 * Expects the following parameters to be passed in through props
 * @param {int} month (1 to 12)
 * @param {int} year
 * @returns <Calendar/>
 */

export default function Calendar(props) {
  const makeCalendar = () => {
    const date = new Date(props.year, props.month - 1, 1);
    let ret = [];
    let weeks = ["S", "M", "T", "W", "T", "F", "S"];
    // day of week headers
    for (const day of weeks)
      ret.push(
        <div className="calendar-dayofweek calendar-cell center"> {day} </div>
      );

    // days of previous month
    let t = new Date(props.year, props.month, 0).getDate();
    let n = date.getDay();
    console.log(n);
    for (let i = 0; i < n; i++)
      ret.push(
        <div
          className="calendar-cell calendar-date-inactive"
          dow={i}
          day={t - n + 1 + i}
          month={((props.month - 2) % 12) + 1}
        >
          {t - n + 1 + i}
        </div>
      );

    // days of the current month
    for (let i = 1; i <= t; i++)
      ret.push(<div className="calendar-date calendar-cell"> {i} </div>);

    // fill in the rest of the calendar
    let k = 7 - (ret.length % 7);
    for (let i = 1; i <= k; i++)
      ret.push(<div className="calendar-cell"></div>);

    return ret;
  };
  let months = [
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
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="calendar-month">{months[props.month - 1]}</div>
        <div className="calendar-year">{props.year}</div>
      </div>
      <div className="calendar-grid">{makeCalendar()}</div>
    </div>
  );
}
