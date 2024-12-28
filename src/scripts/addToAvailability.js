
/*

STATUS CODES
0 - Successfully added an interval to list of availabilities

REJECTED
1 - Start time is greater or equal to end time
2 - There exists an overlapping interval in the existing availibilities
*/
export default function addToAvailability(startTime, endTime){
            
    if (startTime >= endTime) return 1;

    if (!localStorage.getItem("avail")){
        localStorage.setItem("avail", JSON.stringify([]));
    }
    
    
    // we need to check if the submitted time overlaps with any existing ones
    let avail = JSON.parse(localStorage.getItem("avail"));
    for (const e of avail){
        if ((e.startTime <= startTime && startTime < e.endTime) || (e.startTime < endTime && endTime <= e.endTime)){
            return 2;
        }
    };

    let obj = {};
    obj.startTime = startTime;
    obj.endTime = endTime;
    avail.push(obj);
    localStorage.setItem("avail", JSON.stringify(avail));
    return 0;
}