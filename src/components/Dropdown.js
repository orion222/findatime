import "../styles/Dropdown.css"
export default function Dropdown(props) {
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

  const handleClick = (idx) => {
    props.setDropdown(false);
    props.setMonth(idx);
  }


  return (
    <div className="dropdown-container" onClick={(e) => e.stopPropagation()}>
        
      {months.map((m, idx) => (
        <div className={"dropdown-item" + ((idx === props.month) ? " dropdown-item-active": "")} onClick={() => handleClick(idx)} key={idx}>
          {m}
        </div>
      ))}
    </div>
  );
}
