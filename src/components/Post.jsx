import { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts(posts);
  }, [posts]);

  const postItems = posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ));

  return (
    <div>
      <h1>POST</h1>
      {postItems}
    </div>
  );
};

export default Post;
