import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem"

export default function InterviewerList(props) {
  const interviewers = props.interviewers
  const mappedinterviewers = interviewers.map((interviewer) => {
    return <InterviewerListItem 
    key={interviewers.id} 
    {...interviewer} 
    selected= {interviewer.id === props.value} 
    setInterviewer={() => props.onChange(interviewer.id)}
    />
  }); 
  return(
  <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">{mappedinterviewers}</ul>
</section>
)
}