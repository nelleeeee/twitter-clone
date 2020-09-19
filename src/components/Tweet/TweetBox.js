import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB12LkMW.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f&x=466&y=428" />
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter image URL"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
