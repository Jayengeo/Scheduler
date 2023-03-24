import React from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import { useState } from "react";

//allows for user to input name and select an interviewer to book an appointment
export default function Form(props) {
  const [name, setName] = useState(props.name || "");

  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const [error, setError] = useState("");

 // clears information on form 
  function reset() {
    setName("");
    setError("");
    setInterviewer(null);
  }

  //cancels booking an appointment 
  function cancel() {
    reset();
    props.onCancel();
  }

  // sets an error only if name is not present, 
  function validate() {
    if (name === "") {
      setError("student name cannot be blank");
      return;
    }
  
    setError("");
    props.onSave(name, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name={props.name}
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            data-testid="student-name-input"
          />
          <section className="appointment__validation">{error}</section>
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          interviewer={props.interviewer}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button
            confirm
            onClick={validate}
            onSubmit={(event) => event.preventDefault()}
          >
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
