import { useState } from 'react'
import Calendar from "../calendar/Calendar"
import "../../styles/pages/RespondeeView.css"

export default function RespondeeView(props){

    const today = new Date();
    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());
    return (
        <div className = "r-container">
          <div className = "cal-grid-item">
            <Calendar month = {month} year = {year} setMonth = {setMonth} setYear = {setYear}/>
          </div>
          <div className = "date-grid-item">

          </div>
      </div>
    )
}