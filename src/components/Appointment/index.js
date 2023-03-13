import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import useVisualMode from "hooks/useVisualMode";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";
import Error from "components/Appointment/Error";


export default function Appointment(props) {
  
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE"; 
  const ERROR_DELETE = "ERROR_DELETE"; 

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    if (name && interviewer) {
      transition(SAVING);

      const interview = {
        student: name,
        interviewer,
      };

      props
        .bookInterview(props.id, interview)
        .then(() => transition(SHOW))
        .catch(error => transition(ERROR_SAVE, true));
    }
  }

  function remove() {
    transition(CONFIRM);

    if (mode === CONFIRM) {
      transition(DELETING,true);
      props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(error => transition(ERROR_DELETE, true));
    }
  }

  function edit() {
    transition(EDIT);
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={remove}
          onEdit={edit}
        />
      )}
      {mode === CREATE && (
        <Form onSave={save} interviewers={props.interviewers} onCancel={back} />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you want to delete?"
          onCancel={back}
          onConfirm={remove}
        />
      )}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === EDIT && (
        <Form
          name={props.name ? props.name : props.interview.student}
          value={props.value ? props.value : props.interview.interviewer.id}
          onSave={save}
          onEdit={edit}
          interviewers={props.interviewers}
          onCancel={back}
        />
      )}
      {mode === ERROR_SAVE && <Error message="Can not Save appointment" onClose={back} />}
      {mode === ERROR_DELETE && <Error message="Can not delete appointment" onClose={back} />}
    </article>
  );
}
