import React from 'react'

function LocalTime({ localtime }) {
  const [date, timepart] = localtime.split(" ");

  let [hour, miute] = timepart.split(":");

  hour = parseInt(hour);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;

  const formatedTime = `${hour} : ${miute} ${ampm}`;
  const formatedDate = `${date}`;


  return (
    <>
      <span>{formatedDate}  {formatedTime}</span>
    </>
  )
}

export default LocalTime
