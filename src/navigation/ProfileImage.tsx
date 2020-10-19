import React from "react";
// ONLY FOR TEST
import profileImage from "../images/generic_icon.png";

const ProfileImage: React.FC = () => {
  return (
    <div id="profile_image_block">
      <img id="profile_image" src={profileImage} />
    </div>
  );
};

export default ProfileImage;
