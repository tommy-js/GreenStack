import React from "react";
import { UserMuteButton } from "../UserMuteButton/UserMuteButton";
import { UserFollowButton } from "../UserFollowButton/UserFollowButton";

interface Props {
  mute: boolean;
  following: boolean;
  userId: number;
  changeMuted: (mute: boolean) => void;
  setUnfollowed: (userId: number) => void;
}

export const UserFollowingOptions: React.FC<Props> = (props) => {
  return (
    <div>
      <UserMuteButton changeMuted={props.changeMuted} mute={props.mute} />
      <UserFollowButton
        setUnfollowed={props.setUnfollowed}
        following={props.following}
        userId={props.userId}
      />
    </div>
  );
};