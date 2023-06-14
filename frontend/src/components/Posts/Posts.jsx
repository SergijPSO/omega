import React from "react";
import PostItem from "../PostItem/PostItem";
import posts from "../../data/posts.json";

const Posts = (props) => {
  return (
    <div className='app-posts'>
      {posts.posts.map((post) => (
        <PostItem
          key={post.id}
          imageUrl={post.image}
          postTitle={post.title}
          postText={post.text}
        />
      ))}
      <div>{props.children}</div>
    </div>
  );
};

export default Posts;
