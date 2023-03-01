
export function getAppointmentsForDay(state, day) {
  const results = [];
  const dayInfo = state.days.filter(d => d.name === day)

  if (!dayInfo[0]) return results;
 
  for (const id of dayInfo[0].appointments) {
    results.push(state.appointments[id]);
  }

  return results;
};