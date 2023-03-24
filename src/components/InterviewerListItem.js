import React from "react";
import "components/InterviewListItem.scss";
import classNames from "classnames"; 

export default function InterviewerListItem(props) {
 
  //conditionally render scss styling based on boolean value of prop provided
  const InterviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  
  return(
  <li className={InterviewerClass} onClick={props.setInterviewer}>
  <img
    className="interviewers__item-image"
    src={props.avatar}
    alt={props.name}
  />
  {props.selected && <h6>{props.name}</h6>} 
</li>
)
}