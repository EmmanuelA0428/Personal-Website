import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { projects } from "../Constants";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  video,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="flex flex-col lg:flex-row items-center mb-12"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#403D52] border border-[#C8B784] rounded-2xl flex flex-col items-center justify-center p-4 shadow-lg max-w-xs lg:max-w-sm"
      >
        <div className="relative w-full h-[280px] rounded-t-2xl overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={image}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <h1 className="text-white font-bold text-xl">{name}</h1>
          <p className="mt-2 text-gray-300 text-sm">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 justify-center text-[#FFD700]">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-sm text-${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>

      <div className="hidden lg:block mx-4">
        <svg height="20" width="40">
          <line
            x1="0"
            y1="10"
            x2="40"
            y2="10"
            style={{ stroke: "#333", strokeWidth: 2 }}
          />
        </svg>
      </div>

      <div className="w-full lg:w-[700px] h-[400px] bg-gray-200 rounded-lg flex justify-center items-center mt-6 lg:mt-0">
        <img
          src={video}
          alt="video"
          className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(to right, rgb(69,67,100), rgb(255,204,153))",
      }}
    >
      <div className="flex flex-col items-center justify-top">
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#fff",
            marginBottom: "30px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
          className="text-4xl font-bold text-white mt-12"
        >
          Projects
        </h1>
      </div>
      <div className="mt-20 flex flex-col gap-7 items-center ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
