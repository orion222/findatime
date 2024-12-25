import "../../styles/calendar/Calendar.css";

export default function Day(props){

    let d = props.day;
    function getDay(){
        props.setDay(d);
    }
    return (
        <div className="calendar-date calendar-cell" id={d} key={d} onClick = {() => getDay()}>
            {d}
            {props.children}
        </div>
    )
}