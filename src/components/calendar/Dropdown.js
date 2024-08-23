import "../../styles/calendar/Dropdown.css"
import { useEffect } from 'react'
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
    props.setDay(-1);
  }
  function closeContainer(e){
    if (props.dropdown) {
        e.preventDefault();
        if (!document.getElementById('dropdown').contains(e.target)) {
          props.setDropdown(false);
        }
        e.stopPropagation();
      }   
  };

  useEffect(() => {
    // Attach the event listener to the document
    document.addEventListener('click', closeContainer);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('click', closeContainer);
    };
  }, []);

  return (
    <div className="dropdown-container" id = "dropdown" onClick = {closeContainer}> 
        
      {months.map((m, idx) => (
        <div className={"dropdown-item" + ((idx === props.month) ? " dropdown-item-active": "")} onClick={() => handleClick(idx)} key={idx}>
          {m}
        </div>
      ))}
    </div>
  );
}
