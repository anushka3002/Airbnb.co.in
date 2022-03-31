import { useState } from "react";
import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export const DatePicker = ()=>{
    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}></DateRangePicker>
        </div>
    )

}