import React from "react";
import {
  NavBar,
  Footer,
  Resume,
  Hero,
  Blog,
  Projects,
  BlogContent,
} from "./Components";
import {
  Certifications,
  Skills,
  Testimonials,
  Experience,
  Contact,
} from "./Components/HomeScreenComponents";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { testimonials, skills, certifications } from "./Constants";
import "./index.css";
import { BlogProvider } from "./Contexts/BlogContext";

function App() {
  return (
    <BlogProvider>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog/:id" element={<BlogContent />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </BlogProvider>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Certifications />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
