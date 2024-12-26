import "../../styles/date-panel/TimeBookingWindow.css";
import { useState, useEffect } from "react";
import TimeSelector from "./TimeSelector"
import {Toaster, toast} from 'sonner'

export default function TimeBookingWindow(props) {
  const [startTime, setStartTime] = useState({ time: "9:00", am: true });
  const [endTime, setEndTime] = useState({ time: "5:00", am: false });

  useEffect(() => {
    if (!startTime.am && endTime.am) {
      setEndTime((prev) => ({ ...prev, am: false }));
    }
  }, [startTime.am]);

  // Sync start time's AM/PM with end time
  useEffect(() => {
    if (endTime.am && !startTime.am) {
      setStartTime((prev) => ({ ...prev, am: true }));
    }
  }, [endTime.am]);

  const addHandler = () => {
    toast.success("Time added");
  }
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
        <button className = "bottone1" onClick = {addHandler}>
            Add Time
        </button>
      </div>
      <Toaster richColors position="bottom-right" />
    </>
  );
}
