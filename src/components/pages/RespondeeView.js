import { useState } from 'react'
import Calendar from "../calendar/Calendar"
import Panel from "../date-panel/Panel"
import "../../styles/pages/RespondeeView.css"

export default function RespondeeView(props){

    const today = new Date();
    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());
    const [day, setDay] = useState(-1);
    return (
        <div className = "r-container">
          <div className = "cal-grid-item">
            <Calendar month = {month} year = {year} setMonth = {setMonth} setYear = {setYear} setDay = {setDay}/>
          </div>
          <div className = "date-grid-item">
            <Panel month = {month} day = {day}/>
          </div>
      </div>
    )
}