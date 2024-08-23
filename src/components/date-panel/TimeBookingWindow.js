

export default function TimeBookingWindow(props){

    return (
        <h1>{months[props.month] + " " + props.day}</h1>
    )
}
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  