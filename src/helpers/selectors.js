
export function getAppointmentsForDay(state, day) {
  const results = [];
  const dayData = state.days.filter(data => data.name === day)

  if (!dayData[0]) return results;
 
  for (const id of dayData[0].appointments) {
    results.push(state.appointments[id]);
  }

  return results;
}; 

export function getInterview(state, interview) { 
  if (!interview) {
    return null;
  }

  const interviewerData = state.interviewers[interview.interviewer];
 
  console.log("state.interveiwers:" , state.interviewers)
  console.log("interview.interviewer:",interview.interviewer)
  console.log(interview)
  console.log(interviewerData)
  
  return {
    student: interview.student,
    interviewer: interviewerData
  }
}
