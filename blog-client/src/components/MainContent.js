import React from "react";
import "./MainContent.css";
import { PostsContainer, Post, PostForm, Sig } from "./index";

const MainContent = props => {
  return (
    <div className="main-content">
      {/* Need to pass set to posts container */}
      {props.displayPosts && <PostsContainer {...props} />}
      {props.displayPost && <Post {...props} />}
      {props.displayForm && <PostForm {...props} />}
      <Sig />
    </div>
  );
};

export default MainContent;
