import Calendar from "./Calendar"
import { useState } from 'react'
export default function Landing(){
    const today = new Date();


    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());
    return (
        <div className = "center container">
        <Calendar month = {month} year = {year} setMonth = {setMonth} setYear = {setYear}/>
      </div>
    )
}