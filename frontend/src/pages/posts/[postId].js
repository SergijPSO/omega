import { useEffect, useState } from "react";

const PostDetails = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const selectedPost = JSON.parse(sessionStorage.getItem("selectedPost"));
    setPost(selectedPost);
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='app-post__container'>
      <img src={`${post.image}`} />
      <h1>{post.title}</h1>
      <p>{post.text}</p>
    </div>
  );
};

export default PostDetails;
