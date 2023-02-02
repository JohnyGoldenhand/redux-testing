import React, { MouseEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPost } from "./postsSlice";
import { selectUsers } from "../users/usersSlice";

export const AddPostForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [userId, setuserId] = useState<string>("");

  const dispatch = useDispatch();

  const users = useSelector(selectUsers);

  const onFormSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    if (title && content) {
      e.preventDefault();
      dispatch(addPost(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

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
        <label>Author:</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => setuserId(e.target.value)}
        >
          <option value="" />
          {userOptions}
        </select>
        <label>Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={onFormSubmit} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </div>
  );
};
