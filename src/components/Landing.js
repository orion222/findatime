import Calendar from "./Calendar"
import { useState } from 'react'
export default function Landing(){
    const today = new Date();
    
    const [args, setArgs] = useState({
      month: today.getMonth(),
      year: today.getFullYear()
    })
    return (
        <div className = "center container">
        <Calendar month = {args.month} year = {args.year} setArgs = {setArgs} />
      </div>
    )
}