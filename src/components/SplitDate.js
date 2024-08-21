import "../styles/Calendar.css";
export default function SplitDate(props) {


    function returnTopDay(){
      console.log(props.top);
    }

    // clicking the bottom date will also call the eventHandler
    // for the first date since splitDate-lower is nested in 
    // splitDate-container, so we can use a state to prevent both
    // from firing 
    function returnBottomDay(){
        console.log(props.bottom);
    }
  return (
    <div className={"splitDate-container " + props.class}>
      <div className="splitDate-upper splitDate-date" id = {props.top} onClick = {() => returnTopDay()}></div>
      <div className="splitDate-day1"> {props.top} </div>
      <div className="splitDate-lower splitDate-date" id = {props.bottom} onClick = {() => returnBottomDay()}></div>
      <div className="splitDate-day2">{props.bottom}</div>
    </div>
  );
}
