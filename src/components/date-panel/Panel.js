import "../../styles/date-panel/Panel.css"
import AvailabilityWindow from "./AvailabilityWindow"
import TimeBookingWindow from "./TimeBookingWindow"
export default function Panel(props){
    
    return (
        <div className = "panel-container">
            {props.day > 0 ? <TimeBookingWindow month = {props.month} day = {props.day} setDay = {props.setDay}/>: <AvailabilityWindow month = {props.month}/>}
        </div>
    )

}