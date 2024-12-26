import "../../styles/date-panel/TimeSelector.css"
export default function TimeSelector(props){

    const handleInput = (e) => {
        const newTime = {
           time: e.target.value,
           am: props.am
        }
        props.setTime(newTime);
        console.log(e.target.value);
    }
    const handleButton = (bool) => {
        const newTime = {
            time: props.time,
            am: bool
        }
        props.setTime(newTime);
        console.log(bool);
    }
    return (
        <div className = "time-container">
            <div className = "time-input-label">{props.name}</div>
            <div className="time-flex">
                <input className = "time-input"  pattern="^(0?[1-9]|1[0-2]):[0-5][0-9]" placeholder="12:00" onChange={handleInput}/>
                <div className="time-flex">
                    <button onClick = {() => handleButton(true)} className = {(props.am) ? "ampm-active": ""}>AM</button>
                    <button onClick = {() => handleButton(false)} className = {(!props.am) ? "ampm-active": ""}>PM</button>
                </div>
            </div>
        </div>
    );
}