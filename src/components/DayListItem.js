import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots,
  });
  
  const formatSpots = (props) => {
    if (!props) {
      return "no spots remaining";
    }
    if (props === 1) {
      return `${props} spot remaining`;
    }
    return `${props} spots remaining`;
  };
  
  const spotsRemaining = formatSpots(props.spots);

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{spotsRemaining}</h3>
    </li>
  );
}
