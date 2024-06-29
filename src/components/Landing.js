import Calendar from "./Calendar"
import { useState } from 'react'
export default function Landing(){
    const today = new Date();
    
    const [args, setArgs] = useState({
      month: 0,
      year: 2025
    })
    return (
        <div className = "center container">
        <Calendar month = {args.month} year = {args.year} setArgs = {setArgs} />
      </div>
    )
}