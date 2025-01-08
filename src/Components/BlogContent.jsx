// BlogDetail.jsx
import React from "react";
import { useContext } from "react";
import BlogContext from "../Contexts/BlogContext";
import { storyBlogs, researchBlogs } from "../Constants";

const BlogContent = () => {
  const { currentBlogId, setCurrentBlogId } = useContext(BlogContext);

  let post = storyBlogs.find((post) => post.id === currentBlogId);
  if (!post) {
    post = researchBlogs.find((post) => post.id === currentBlogId);
  }

  if (!post) return <div>Post not found!</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* Display more content here */}
    </div>
  );
};

export default BlogContent;
