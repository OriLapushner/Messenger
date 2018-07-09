import React from "react";
import "./ContactView.css";

const ContactView = props => {
  var selectedClass = props.isSelected ? " selected" : "";
  return (
    <div
      className={"contact-view-container" + selectedClass}
      onClick={() => props.setSelectedPerson(props.contact.name)}
    >
      <div className="img-name-container">
        <img src={props.contact.imgUrl} className="rounded-circle" alt="" />
        <div className="contact-view-text">
          <span className="contact-view-name bold">{props.contact.name}</span>
          <span className="contact-view-status">{props.contact.status}</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ContactView;
