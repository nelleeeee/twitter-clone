import React from "react";
import Post from "../Tweet/Post";
import TweetBox from "../Tweet/TweetBox";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>home</h2>
      </div>
      <TweetBox />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
