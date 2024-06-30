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
    <div className="dropdown-container">
        
      {months.map((m, idx) => (
        <div className="dropdown-item" onClick={handleClick(idx)} key={idx}>
          {m}
        </div>
      ))}
    </div>
  );
}
