import { useState } from 'react'
import Calendar from "../calendar/Calendar"
import Panel from "../date-panel/Panel"
import "../../styles/pages/RespondeeView.css"

export default function RespondeeView(props){

    const today = new Date();
    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());
    const [dateClicked, setDateClicked] = useState(false);
    return (
        <div className = "r-container">
          <div className = "cal-grid-item">
            <Calendar month = {month} year = {year} setMonth = {setMonth} setYear = {setYear} setDateClicked = {setDateClicked}/>
          </div>
          <div className = "date-grid-item">
            <Panel dateClicked = {dateClicked} setDateClicked = {setDateClicked}/>
          </div>
      </div>
    )
}