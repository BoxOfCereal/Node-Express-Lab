import React, { useState } from "react";
import "./PostForm.css";

const PostForm = props => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  console.log(props);

  const addPost = post => {
    fetch(`http://localhost:8000/api/posts/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    })
      .then(response => response.json())
      .then(pst => {
        console.log(pst);
      });
    return false;
  };

  const showPosts = () => {
    props.setDisplayForm(false);
    props.setDisplayPost(false);
    props.setDisplayPosts(true);
  };

  return (
    <section className="post-container">
      <form action="" onSubmit={e => e.preventDefault()}>
        <div className="post-info">
          <input
            type="text"
            name="title"
            className="input-title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            name="contents"
            className="textarea-contents"
            cols="90"
            rows="10"
            value={contents}
            onChange={e => setContents(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              addPost({ title: title, contents: contents });
              showPosts();
            }}
            className="btn-check"
          >
            &#10004;
          </button>
          <button>Ø</button>
        </div>
      </form>
    </section>
  );
};

export default PostForm;
