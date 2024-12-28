
export default function parseTime(str){

    let colonInd = (str.length === 5) ? 2: 1;
    let hour = parseInt(str.substring(0, colonInd));

    // we treat 12:00am as 0 minutes
    if (hour === 12) hour = 0;
    else hour *= 60;
    let mins = parseInt(str.substring(colonInd + 1));
    return hour + mins;
}