import { React, useState } from "react";

import posts from "../../data/posts.json";

const PostItem = (props) => {
  const [height, setHeight] = useState("56px");
  const [rotate, setRotate] = useState(false);

  const toggleHeight = () => {
    setHeight((prevHeight) => (prevHeight === "56px" ? "100%" : "56px"));
    setRotate((prevRotate) => !prevRotate);
  };

  return (
    <div className='app-post'>
      {console.log(posts.posts.image)}
      <img
        src={`${props.imageUrl}`}
        alt='post image'
        className='app-post_image'
      />
      <div className='app-post__description'>
        <h3 className='app-post_title'>{`${props.postTitle}`}</h3>

        <p className='app-post_text' style={{ height }}>
          {`${props.postText}`}
        </p>

        <button className='app-post__btn' onClick={toggleHeight}>
          <svg
            className='app-post__btn-icon'
            style={{
              transform: rotate ? "rotate(180deg)" : "none",
            }}
          >
            <use xlinkHref='./images/sprite.svg#arrow-down' />
          </svg>
          <span className='app-post__btn-text'>Show More</span>
        </button>
      </div>
    </div>
  );
};

export default PostItem;
