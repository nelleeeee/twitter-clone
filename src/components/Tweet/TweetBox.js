import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "../../firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "text",
      username: "text",
      verified: true,
      text: tweetMessage,
      avatar:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB12LkMW.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f&x=466&y=428",
      image: tweetImage,
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB12LkMW.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f&x=466&y=428" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text'"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter image URL"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
