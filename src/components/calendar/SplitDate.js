import "../../styles/calendar/Calendar.css";
export default function SplitDate(props) {


  function getDay(d){
    props.setDay(d);
    console.log(d);
  }
  return (
    <div className={"splitDate-container calendar-cell"}>
      <div className="splitDate-upper splitDate-date" id = {props.top} onClick = {() => getDay(props.top)}></div>
      <div className="splitDate-day1"> {props.top} </div>
      <div className="splitDate-lower splitDate-date" id = {props.bottom} onClick = {() => getDay(props.bottom)}></div>
      <div className="splitDate-day2">{props.bottom}</div>
    </div>
  );
}
