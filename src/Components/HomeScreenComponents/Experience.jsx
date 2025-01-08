import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../Constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "rgba(255, 255, 255, 0.1)",
      color: "#fff",
      borderRadius: "10px",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.2)" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-[#FFD700] text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #403D52, #A67F70)",
        padding: "50px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <motion.div variants={textVariant()}>
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#fff",
            marginBottom: "30px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          Experience
        </h2>
      </motion.div>
      <div style={{ width: "80%" }}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
