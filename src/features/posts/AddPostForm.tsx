import React, { MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addPost } from "./postsSlice";

export const AddPostForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const dispatch = useDispatch();

  const onFormSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    if (title && content) {
      e.preventDefault();
      dispatch(addPost(title, content));
      setTitle("");
      setContent("");
    }
  };

  return (
    <div>
      <h3>Add new post</h3>
      <form>
        <label>Post Tittle:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={onFormSubmit}>
          Save Post
        </button>
      </form>
    </div>
  );
};
