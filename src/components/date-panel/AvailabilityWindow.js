import "../../styles/date-panel/Panel.css"
export default function AvailabilityWindow(props){
 
    const renderAvail = () => {
        let avail = JSON.parse(localStorage.getItem("avail"));    
        if (avail == null){
            return <p> No times selected </p>
        }
        else {
            let lst =  []               
            for (let i = 0; i < avail[props.month].length; i++){
                lst.push(<li key = {i}>{avail[props.month][i].startTime + " " + avail[props.month][i].endTime}</li>)
            }
            return <ul>{lst}</ul>
        }
    }
    return (
        <>
            <h1 className = "panel-title"> My Availability </h1>
            <div className = "avail-body">
                {renderAvail()}
            </div>
        </>
    )
}