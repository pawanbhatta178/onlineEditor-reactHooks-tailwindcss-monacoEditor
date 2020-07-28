import { compareAsc, format } from "date-fns";
import React, { useEffect } from "react";
import { parseISO } from "date-fns";

function DateBox({ id, currentDay, currentDate, setDatePicker, selected }) {
  const NumToDay = (num) => {
    switch (num) {
      case 0:
        return "Sun";
      case 1:
        return "Mon";
      case 2:
        return "Tue";
      case 3:
        return "Wed";
      case 4:
        return "Thu";
      case 5:
        return "Fri";
      case 6:
        return "Sat";
    }
  };

  const notSelectedDateStyle =
    "bg-white flex-col border border-gray-500 rounded w-10 hover:bg-blue-800 hover:text-gray-200 cursor-pointer";
  const selectedDateStyle =
    "bg-blue-800 text-gray-200 flex-col border border-gray-500 rounded-lg w-10 hover:bg-blue-800 hover:text-gray-200 cursor-pointer";

  return (
    <div
      className={selected ? selectedDateStyle : notSelectedDateStyle}
      onClick={() => setDatePicker(id)}
    >
      <div className="text-xs flex justify-center ">
        {" "}
        {NumToDay(currentDay)}
      </div>
      <div className="text-sm font-semibold flex justify-center items-center">
        {currentDate}
      </div>
    </div>
  );
}

export default DateBox;
