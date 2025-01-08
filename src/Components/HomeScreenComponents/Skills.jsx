import React, { useState } from "react";
import { skills } from "../../Constants";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [selectedSkillCategory, setSelectedSkillCategory] =
    useState("Technical Skills");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleSkillCategoryChange = (category) => {
    setSelectedSkillCategory(category);
  };

  const handleMouseEnter = (skill) => {
    setHoveredSkill(skill);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(to right, rgb(69,67,100), rgb(255,204,153))",
        padding: "50px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#fff",
          marginBottom: "30px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
        }}
      >
        Skills
      </h2>
      <div className="flex items-center mb-4">
        <button
          className={`mr-4 px-4 py-2 rounded-lg focus:outline-none transition duration-300 ${
            selectedSkillCategory === "Technical Skills"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => handleSkillCategoryChange("Technical Skills")}
        >
          Technical Skills
        </button>
        <button
          className={`px-4 py-2 rounded-lg focus:outline-none transition duration-300 ${
            selectedSkillCategory === "Soft Skills"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => handleSkillCategoryChange("Soft Skills")}
        >
          Soft Skills
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          maxWidth: "80%",
        }}
      >
        {skills
          .find((category) => category.category === selectedSkillCategory)
          .list.map((skill, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => handleMouseEnter(skill)}
              onMouseLeave={handleMouseLeave}
              className="p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
                fontWeight: "bold",
                position: "relative",
              }}
            >
              {skill.name}
              <AnimatePresence>
                {hoveredSkill === skill && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-2 rounded-lg"
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                      color: "white",
                      padding: "10px",
                      borderRadius: "8px",
                      marginTop: "10px",
                      zIndex: 10,
                      width: "200px",
                      textAlign: "left",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {skill.info}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
