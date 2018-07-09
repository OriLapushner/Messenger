import React from "react";
import "./ContactList.css";
import ContactView from "./ContactView/ContactView";

const ContactList = props => {
  var contactList = props.contacts.map(contact => {
    var isSelected = contact.name === props.selectedPerson.name ? true : false;
    return (
      <ContactView
        contact={contact}
        key={contact.name}
        isSelected={isSelected}
        setSelectedPerson={props.setSelectedPerson}
      />
    );
  });
  return (
    <div className="contact-list-container">
      <div className="top-line">
        <input type="text" placeholder="   &#xF002;   Search" />
      </div>
      <hr className="margin-zero" />
      {contactList}
    </div>
  );
};

export default ContactList;
