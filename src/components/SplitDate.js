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
    <div className={"splitDate-container " + props.className}>
      <div className="splitDate-upper splitDate-date" onClick = {() => handleClick1()}></div>
      <div className="splitDate-day1"> {props.top} </div>
      <div className="splitDate-lower splitDate-date" onClick = {() => handleClick2()}></div>
      <div className="splitDate-day2">{props.bottom}</div>
    </div>
  );
}
