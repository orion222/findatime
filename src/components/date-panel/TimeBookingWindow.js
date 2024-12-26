import "../../styles/date-panel/TimeBookingWindow.css";
import { useState } from "react";
import TimeSelector from "./TimeSelector"

export default function TimeBookingWindow(props) {
  const [startTime, setStartTime] = useState({ time: "9:00", am: true });
  const [endTime, setEndTime] = useState({ time: "5:00", am: false });

  return (
    <>
        <div className="time-header">
          
            {new Intl.DateTimeFormat("en-US", { month: "long" }).format(
              new Date(2024, props.month)
            ) +
              " " +
              props.day}
          
        </div>
        <div className="time-stats">
          Overview:
          <ul className="overview-list">
            <li>None</li>
          </ul>
        </div>
        <div className = "time-selectbox">
            
            <TimeSelector name = "Start time" setTime = {setStartTime} time = {startTime.time} am = {startTime.am}/>
            <TimeSelector name = "End time" setTime = {setEndTime} time = {endTime.time} am = {endTime.am}/>
        </div>
        <button className = "bottone1">
            Add Time
        </button>
    </>
  );
}
