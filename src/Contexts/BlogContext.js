// BlogContext.js
import React, { createContext, useContext, useState } from "react";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [currentBlogId, setCurrentBlogId] = useState(null);

  return (
    <BlogContext.Provider value={{ currentBlogId, setCurrentBlogId }}>
      {children}
    </BlogContext.Provider>
  );
}
export default BlogContext;
