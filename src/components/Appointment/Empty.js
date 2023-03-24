import React from "react";

//empty appointment slot with option to add an appointment
export default function Empty(props) {
  return (
    <main className="appointment__add" >
      <img className="appointment__add-button" 
      src="images/add.png" 
      alt="Add" 
      onClick={props.onAdd}
      />
    </main>
  );
}
