import React from "react";
import "./Message.css";

const Message = props => {
  var leftArrow = props.isMsgFromSelf ? <div class="arrow-left" /> : null;
  var rightArrow = !props.isMsgFromSelf ? <div class="arrow-right" /> : null;
  var rowReverse = !props.isMsgFromSelf ? " flex-row-reverse" : ""
  var marginLeft = !props.isMsgFromSelf ? " margin-left" : ""
  var marginRight = props.isMsgFromSelf ? " margin-right" : ""
  var blue = !props.isMsgFromSelf ? " blue" : ""
  return (
    <div className={"message-container" + rowReverse}>
      <div className="message-img-time-container">
        <img src={props.imgUrl} className="rounded-circle" />
        <span className="message-time">{props.message.sentAt}</span>
      </div>
      <div className="arrow-message-container">
        {leftArrow}
        <div className={"rounded message-body" + blue + marginLeft + marginRight}>{props.message.body}</div>
        {rightArrow}
      </div>
    </div>
  );
};

export default Message;
