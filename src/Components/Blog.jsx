import React, { useContext } from "react";
import { storyBlogs, researchBlogs } from "../Constants";
import { useNavigate } from "react-router-dom";
import BlogContext from "../Contexts/BlogContext";

const Blog = () => {
  const { setCurrentBlogId } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleBlogClick = (id) => {
    try {
      setCurrentBlogId(id);
      navigate(`/blog/${id}`);
      console.log("Blog clicked ", id);
    } catch (error) {
      console.error("Failed to navigate to blog post: ", error);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(to right, rgb(69,67,100), rgb(255,204,153))",
      }}
    >
      <div className="flex flex-col items-center p-4 lg:p-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Blog</h1>
        <h2 className="text-center text-lg text-white max-w-2xl">
          “Storytellers have a superpower. They can make people feel good and
          whole and right. They can inspire and inform. They can make people see
          the world in a new way. They can make people feel better about
          themselves.”
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row flex-grow">
        {/* Stories Section */}
        <div className="flex-1 lg:overflow-auto p-2 lg:p-4 border-r border-gray-300">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-gray-100 bg-gradient-to-r from-[#5A5E85] to-[#AE9C81] p-2 rounded shadow-md">
              📖 Stories
            </h1>
          </div>
          {storyBlogs.map((post) => (
            <div
              key={post.id}
              className="mb-2 lg:mb-4 p-2 lg:p-4 rounded-lg hover:bg-gray-200 cursor-pointer text-center lg:text-left"
              onClick={() => handleBlogClick(post.id)}
              aria-label={`Read story: ${post.title}`}
            >
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-sm">{post.description}</p>
            </div>
          ))}
        </div>

        {/* Research Section */}
        <div className="flex-1 lg:overflow-auto p-2 lg:p-4 border-l border-gray-300">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-gray-100 bg-gradient-to-r from-[#5A5E85] to-[#AE9C81] p-2 rounded shadow-md">
              🔬 Research
            </h1>
          </div>
          {researchBlogs.map((post) => (
            <div
              key={post.id}
              className="mb-2 lg:mb-4 p-2 lg:p-4 rounded-lg hover:bg-gray-200 cursor-pointer text-center lg:text-left"
              onClick={() => handleBlogClick(post.id)}
              aria-label={`Read research: ${post.title}`}
            >
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-sm">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;


// Change Text color to white 