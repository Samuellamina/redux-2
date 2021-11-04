import axios from "axios";
import { useState } from "react";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();

    const newPost = {
      title: title,
      body: body,
    };

    await axios
      .post(`https://jsonplaceholder.typicode.com/posts`, newPost)
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <h1>Add Posts</h1>
      <form onSubmit={handleSave}>
        <div>
          <label>Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Body</label>
          <br />

          <textarea
            name="body"
            value={body}
            cols="30"
            rows="10"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
