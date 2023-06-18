import { useEffect, useState } from "react";
import axios from "axios";
import ModalWindow from "@/components/ModalWindow/ModalWindow";

const PostDetails = () => {
  const [post, setPost] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDeletePost = async (postId) => {
    const url = `http://localhost:5000/api/posts/${postId}`; // Replace with your actual URL

    try {
      await axios.delete(url);
      alert(`Post with ID ${postId} deleted successfully.`);
      window.location.href = "/";
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  useEffect(() => {
    const selectedPost = JSON.parse(sessionStorage.getItem("selectedPost"));
    setPost(selectedPost);
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='app-post__selected'>
      <img className='app-post__selected_image' src={`${post.picture}`} />
      <h1 className='app-post__selected_title'>{post.title}</h1>
      <p className='app-post__selected_summary'>{post.summary}</p>
      <p className='app-post__selected_text'>{post.text}</p>
      <button
        onClick={() => handleDeletePost(post._id)}
        className='app-managment_button app-managment_button--delete'
      >
        Delete
      </button>
      <button
        onClick={openModal}
        className='app-managment_button app-managment_button--update'
      >
        Edit
      </button>
      <ModalWindow isOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default PostDetails;
