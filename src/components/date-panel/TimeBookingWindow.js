import "../../styles/date-panel/TimeBookingWindow.css";
import { useState, useEffect, useRef } from "react";
import TimeSelector from "./TimeSelector"
import {Toaster, toast} from 'sonner'
import addToAvailability from "../../scripts/addToAvailability";

export default function TimeBookingWindow(props) {

  // startTime, endTime all in minutes
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const input1 = useRef(null);
  const input2 = useRef(null);

  let startAM = startTime < 720;
  let endAM = endTime < 720;

  // Sync start time with end time 
  // e.g. if start time is PM then end time must be PM too
  useEffect(() => {
    if (!startAM && endAM) {
      setEndTime((prev) => prev + 60 * 12);
    }
  }, [startTime]);

  useEffect(() => {
    if (endAM && !startAM) {
      setStartTime((prev) => prev - 60 * 12);
    }
  }, [endTime]);

  const addHandler = () => {

    if (input1.current && input2.current){
      let b1 = input1.current.validity.valid;
      let b2 = input2.current.validity.valid;
      let validInput = b1 && b2;
      if (validInput){
        
        let status = addToAvailability(startTime, endTime);
        if (status === 0) 
          toast.success("Time added");
        else if (status === 1)
          toast.error("Start time must be before end time")
        else if (status === 2)
          toast.warning("Time already exists");

        console.log(localStorage.getItem("avail"));
      }
      else{
        toast.error("Invalid time format. Must be in form XX:XX");
      }
    }
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
            
            <TimeSelector name = "Start time" setTime = {setStartTime} time = {startTime} reff = {input1}/>
            <TimeSelector name = "End time" setTime = {setEndTime} time = {endTime}  reff = {input2}/>
        <button className = "bottone1" onClick = {addHandler}>
            Add Time
        </button>
      </div>
      <Toaster richColors position="bottom-right"/>
    </>
  );
}


