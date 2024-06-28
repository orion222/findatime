import "../styles/Calendar.css";
import { useRef } from 'react'
export default function SplitDate(props) {

    const bottom = useRef(false);

    function handleClick1(){
        if (!bottom.current) console.log("clicked 1");
        bottom.current = false;
    }

    // clicking the bottom date will also call the eventHandler
    // for the first date since splitDate-lower is nested in 
    // splitDate-container, so we can use a state to prevent both
    // from firing 
    function handleClick2(){
        console.log("clicked 2");
        bottom.current = true;
    }
  return (
    <div className={"splitDate-container " + props.className} onClick = {() => handleClick1()}>
      <div className="splitDate-day1"> {props.day1} </div>
      <div className="splitDate-lower" onClick = {() => handleClick2()}></div>
      <div className="splitDate-day2">{props.day2}</div>
    </div>
  );
}
