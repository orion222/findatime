import "../styles/Calendar.css";
import SplitDate from "./SplitDate";
import { useMemo, useState } from "react";
import Dropdown from "./Dropdown";
/**
 * Returns a calendar built on the following parameters.
 *
 * Expects the following parameters to be passed in through props
 * @param {int} month (0 to 11)
 * @param {int} year
 * @returns <Calendar/>
 */

export default function Calendar(props) {
  const [dropdown, setDropdown] = useState(false);
  const prevMonth = () => {
    if (props.month === 0) {
      props.setMonth(11);
      props.setYear(props.year - 1);
    } else props.setMonth(props.month - 1);
  };

  const nextMonth = () => {
    if (props.month === 11) {
      props.setMonth(0);
      props.setYear(props.year + 1);
    } else props.setMonth(props.month + 1);
  };


  // what day the first of the month starts on (0-6)
  let n = new Date(props.year, props.month, 1).getDay();
  // # of days in month
  let t = new Date(props.year, props.month + 1, 0).getDate();
  // # of days leftover in 5 weeks that are not in current month
  let k = 7 - ((t + n) % 7);

  const makeCalendar = () => {
    let ret = [];
    // the previous month, if there are any spare days
    ret.push(
      n > 0 && (
        <div
          className="calendar-date-inactive center"
          style={{ gridColumn: `span ${n}` }}
          onClick={prevMonth}
          key={0}
        >
          {n < 3
            ? months[mod(props.month - 1, 12)].substring(0, 3).toUpperCase()
            : months[mod(props.month - 1, 12)].toUpperCase()}
        </div>
      )
    );

    // build the first 4 rows
    ret.push(
      <div className="calendar-date calendar-cell" id={1} key={1}>
        1
        {n === 0 ? (
          <div className="calendar-prev calendar-arrow" onClick={prevMonth} />
        ) : (
          ""
        )}
      </div>
    );
    for (let i = 2; i <= 28 - n; i++)
      ret.push(
        <div className="calendar-date calendar-cell" id={i} key={i}>
          {" "}
          {i}{" "}
        </div>
      );

    let nextDay = 28 - n + 1;

    // if we need to add splitDates
    let v = 0;
    if (n + t > 35) {
      // # of splitDates
      v = (n + t) % 35;
      for (let i = 0; i < v; i++) {
        ret.push(
          <SplitDate
            top={nextDay}
            bottom={nextDay + 7}
            key={nextDay + nextDay + 7}
            class="calendar-cell"
          />
        );
        nextDay++;
      }
    }

    // fill in the rest of the calendar
    for (let i = nextDay; i <= t - v; i++) {
      ret.push(
        <div className="calendar-date calendar-cell" id={i} key={i}>
          {" "}
          {i}{" "}
        </div>
      );
    }

    // fill in the rest of the calendar with blanks
    ret.push(
      n + t < 35 && (
        <div
          className="calendar-date-inactive center"
          style={{ gridColumn: `span ${k}` }}
          onClick={nextMonth}
          key={t + 1}
        >
          {k < 3
            ? months[(props.month + 1) % 12].substring(0, 3).toUpperCase()
            : months[(props.month + 1) % 12].toUpperCase()}
        </div>
      )
    );

    return ret;
  };
  // only need to recompute the calendar if the month / year changes
  const calendar = useMemo(makeCalendar, [props.month, props.year]);
  const week = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <div className="calendar-container">
      <div className="calendar-header">
          <div
            className="calendar-month calendar-header-item"
            onClick={(e) => {setDropdown(true); e.stopPropagation()}}
          >
            {months[props.month]}
            {dropdown && (
                <Dropdown
                  month={props.month}
                  setMonth={props.setMonth}
                  setDropdown={setDropdown}
                  dropdown={dropdown}
                />
              )}
          </div>
        <div className="calendar-year calendar-header-item">{props.year}</div>
      </div>
      <div className="calendar-week">
        {week.map((day, idx) => (
          <div className="calendar-dayofweek calendar-cell center" key = {idx}> {day} </div>
        ))}
      </div>
      <div className="calendar-grid">
        {calendar}
        {n + t >= 35 ? (
          <div className="calendar-next calendar-arrow" onClick={nextMonth} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

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

// for some reason, javascript mod is not well defined for negatives
function mod(n, m) {
  return ((n % m) + m) % m;
}
