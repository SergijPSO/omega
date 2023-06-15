import { React, useState } from "react";

const PostItem = ({ post, onClick }) => {
  const [height, setHeight] = useState("3.5rem");
  const [rotate, setRotate] = useState(false);
  const { summary, image, text, title } = post;

  const toggleHeight = () => {
    setHeight((prevHeight) => (prevHeight === "3.5rem" ? "100%" : "3.5rem"));
    setRotate((prevRotate) => !prevRotate);
  };

  return (
    <div className='app-post'>
      <img
        src={`${image}`}
        alt='post image'
        className='app-post_image'
        onClick={onClick}
      />
      <div className='app-post__description'>
        <h3 className='app-post_title' onClick={onClick}>{`${title}`}</h3>

        <p className='app-post_text' style={{ height }}>
          {`${summary}`}
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

export async function getServerSideProps() {
  // Here you can fetch data from an external API or perform any other async tasks
  return {
    props: {},
  };
}

export default PostItem;
