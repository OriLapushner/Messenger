import React from "react";
import "./Chat.css";
import Message from "./Message/Message";
import starIcon from "../../media/icons/starIcon.png";
import phoneIcon from "../../media/icons/phoneIcon.png";
import videoCameraIcon from "../../media/icons/videoCameraIcon.png";

const chat = props => {
  var messages = props.selectedPerson.messages.map(message => {
    var imgUrl = message.sentBy === "self" ? props.selectedPerson.imgUrl : props.selfImg
    return (
      <Message
        message={message}
        isMsgFromSelf={message.sentBy === "self"}
        imgUrl={imgUrl}
      />
    );
  });
  return (
    <div className="chat-container">
      <div className="top-line">
        <img src={videoCameraIcon} className="video-camera-icon" />
        <hr class="vertical" />
        <img src={phoneIcon} className="phone-icon" />
        <hr class="vertical" />
        <img src={starIcon} className="star-icon" />
        <hr class="vertical" />
      </div>
      <hr class="margin-zero" />
      {messages}
    </div>
  );
};

export default chat;
