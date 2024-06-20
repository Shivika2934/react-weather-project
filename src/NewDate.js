import React from "react";
export default function NewDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = props.date.getDay();
  let hr = props.date.getHours();
  let min = props.date.getMinutes();
  if (min < 10) min = `0${min}`;
  if (hr < 10) hr = `0${hr}`;
  return (
    <div>
      {days[day]} {hr}:{min}
    </div>
  );
}
