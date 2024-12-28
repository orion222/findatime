import parseTime from "../../scripts/parseTime";
import "../../styles/date-panel/TimeSelector.css"
export default function TimeSelector(props){
    const am = props.time < 720;
    const handleInput = (e) => {
        if (e.target.validity.valid){
            const newTime = parseTime(e.target.value) + ((!am) ? 60 * 12: 0);
            props.setTime(newTime);
            console.log(newTime);
        }
    }

    // if bool is true then we clicked AM
    // else we clicked PM
    const handleButton = (bool) => {
        let newTime = null;
        if (!bool && am){
            newTime = props.time + 60 * 12;
        }
        else if (bool && !am){
            newTime = props.time - 60 * 12;
        }
        if (newTime !== null)
            props.setTime(newTime);
        console.log(newTime);
    }

    return (
        <div className = "time-container">
            <div className = "time-input-label">{props.name}</div>
            <div className="time-flex">
                <input className = "time-input"  required="required" pattern="^(0?[1-9]|1[0-2]):[0-5][0-9]" placeholder="12:00" onChange={handleInput} ref = {props.reff}/>
                <div className="time-flex">
                    <button onClick = {() => handleButton(true)} className = {(am) ? "ampm-active": ""}>AM</button>
                    <button onClick = {() => handleButton(false)} className = {(!am) ? "ampm-active": ""}>PM</button>
                </div>
            </div>
        </div>
    );
}