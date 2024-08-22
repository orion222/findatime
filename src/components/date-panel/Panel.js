import "../../styles/date-panel/Panel.css"
import AvailabilityWindow from "./AvailabilityWindow"
import TimeBookingWindow from "./TimeBookingWindow"
export default function Panel(props){
    
    
    return (
        <div className = "panel-container">
            {props.dateClicked ? <TimeBookingWindow/>: <AvailabilityWindow/>}
        </div>
    )

}