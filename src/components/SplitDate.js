import "../styles/Calendar.css";
export default function SplitDate(props) {


    function handleClick1(){
      console.log("clicked 1");
    }

    // clicking the bottom date will also call the eventHandler
    // for the first date since splitDate-lower is nested in 
    // splitDate-container, so we can use a state to prevent both
    // from firing 
    function handleClick2(){
        console.log("clicked 2");
    }
  return (
    <div className={"splitDate-container " + props.class}>
      <div className="splitDate-day1"> {props.top} </div>
      <div className="splitDate-upper splitDate-date" id = {props.top} onClick = {() => handleClick1()}></div>
      <div className="splitDate-day2">{props.bottom}</div>
      <div className="splitDate-lower splitDate-date" id = {props.bottom} onClick = {() => handleClick2()}></div>
    </div>
  );
}
