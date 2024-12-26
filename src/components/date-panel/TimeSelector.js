import "../../styles/date-panel/TimeSelector.css"
export default function TimeSelector(props){
    return (
        <div className = "time-container">
            <div className = "time-input-label">{props.name}</div>
            <div className="time-flex">
                <input className = "time-input"  pattern="^(0?[1-9]|1[0-2]):[0-5][0-9]" placeholder="12:00"/>
                <div className="time-flex">
                    <button>AM</button>
                    <button>PM</button>
                </div>
            </div>
        </div>
    );
}