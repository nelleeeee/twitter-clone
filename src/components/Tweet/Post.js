import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import RepeatIcon from "@material-ui/icons/Repeat";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB12LkMW.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f&x=466&y=428" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              wheein{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
                @wheein
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challenge you to ...</p>
          </div>
        </div>
        <img
          src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB12LkMW.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f&x=466&y=428"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
