import React from "react";
import "./ProfileView.css";
import bellIcon from "../../media/icons/bellIcon.png";
const ProfileView = props => {
  return (
    <div className="profile-container">
      <div className="top-line">
        <img src={bellIcon} className="bell-icon" />
        <span className="self-name">James Anderson</span>
      </div>
      <hr className="margin-zero" />
      <img
        src={props.profile.imgUrl}
        alt=""
        className="rounded-circle profile-img"
      />
      <p className="bold">{props.profile.name}</p>
      <p>{props.profile.city}</p>
      <hr />
      <div className="info-field-container">
        <p>
          <span className="input-field-name bold">NickName: </span>{" "}
          <span className="info-field-value">{props.profile.nickName}</span>
        </p>
        <hr />
        <p>
          <span className="input-field-name bold">Tel:</span>{" "}
          <span className="info-field-value">{props.profile.tel}</span>
        </p>
        <hr />
        <p>
          <span className="input-field-name bold">Date Of Birth: </span>{" "}
          <span className="info-field-value">{props.profile.DOB}</span>
        </p>
        <hr />
        <p>
          <span className="input-field-name bold">Gender: </span>{" "}
          <span className="info-field-value">{props.profile.gender}</span>
        </p>
        <hr />
        <p>
          <span className="input-field-name bold">Languages: </span>
          <span className="info-field-value">{props.profile.languages}</span>
        </p>
      </div>
    </div>
  );
};
export default ProfileView;
