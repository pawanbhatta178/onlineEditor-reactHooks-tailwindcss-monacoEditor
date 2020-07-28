import React, { useState, useEffect, useContext } from "react";
import UserContext from "../UserContext";
import DateBox from "./DateBox";
import { parseISO, eachDayOfInterval, sub, formatISO } from "date-fns";

function DatePicker() {
  const { datePicker, setDatePicker } = useContext(UserContext);
  const [regularDate, setRegularDate] = useState(parseISO(datePicker));

  const lastSevenDays = eachDayOfInterval({
    start: sub(regularDate, { days: 6 }),
    end: regularDate,
  });

  // return <button onClick={() => setDatePicker(CurrentDate)}>{datePicker}</button>;
  return (
    <div className="flex pt-3 px-10 ">
      {lastSevenDays.map((day, index) => (
        <DateBox
          key={index}
          id={formatISO(day, { representation: "date" })}
          currentDay={day.getDay()}
          currentDate={day.getDate()}
          setDatePicker={setDatePicker}
          selected={
            datePicker === formatISO(day, { representation: "date" })
              ? true
              : false
          }
        />
      ))}
    </div>
  );
}

export default DatePicker;
