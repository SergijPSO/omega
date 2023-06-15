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
    <div className='app-post__selected'>
      <img className='app-post__selected_image' src={`${post.image}`} />
      <h1 className='app-post__selected_title'>{post.title}</h1>
      <p className='app-post__selected_summary'>{post.summary}</p>
      <p className='app-post__selected_text'>{post.text}</p>
    </div>
  );
};

export default PostDetails;
