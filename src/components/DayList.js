import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  const days = props.days;

 //map the props for each dayListItem, use spread operator for name and spots
  const mappedDays = days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        {...day}
        selected={day.name === props.value}
        setDay={props.onChange}
      />
    );
  });

  return <ul>{mappedDays}</ul>;
}
