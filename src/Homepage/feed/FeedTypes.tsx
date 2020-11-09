import React, { useState, useEffect } from "react";
import LikePost from "../../resolvers/LikePost";
import DislikePost from "../../resolvers/DislikePost";
import { Link } from "react-router-dom";
import comment from "../../images/comment.png";
import { returnDate } from "../../notifications/notificationsTimestamp";

interface Props {
  title: string;
  userId: number;
  user: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  comments: any;
  postId: string;
  allowComments: boolean;
  allowLikes: boolean;
}

export const RenderModal: React.FC<Props> = (props) => {
  function returnAllowed() {
    if (props.allowLikes === true) {
      return (
        <div>
          <p>
            <div className="post_values">
              <span className="post_value_inner">{props.likes}</span>
            </div>
            <LikePost postId={props.postId} />
            <div className="post_values">
              <span className="post_value_inner">{props.dislikes}</span>
            </div>
            <DislikePost postId={props.postId} />
            <div className="post_values">
              <span className="post_value_inner">{props.comments.length}</span>
            </div>
            <div className="like_button_block">
              <img className="like_button_image" src={comment} />
            </div>
          </p>
        </div>
      );
    } else return null;
  }

  return (
    <div>
      <Link className="feed_link" to={`/home/post/${props.postId}`}>
        <h3>{props.user}</h3>
        <p>{props.text}</p>
        {returnAllowed()}
        <p>Posted {returnDate(props.timestamp)}</p>
      </Link>
    </div>
  );
};
