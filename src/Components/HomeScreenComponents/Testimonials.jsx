import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { testimonials } from "../../Constants";

const FeedbackCard = ({
  testimonial,
  name,
  designation,
  company,
  image,
  index,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105 max-w-sm"
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white
      backdropFilter: "blur(10px)", // Apply a blur effect to the background behind the card
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      flex: "1 1 calc(33.333% - 20px)", // Control the width of each card and spacing
      margin: "10px", // Spacing between cards
    }}
  >
    <p className="text-white font-black text-2xl">"</p>
    <div className="mt-3">
      <p className="text-white text-base leading-relaxed">{testimonial}</p>
      <div className="mt-4 flex items-center">
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white"
        />
        <div>
          <p className="text-white font-semibold text-lg">{name}</p>
          <p className="text-secondary text-sm">
            {designation} of {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => (
  <div
    style={{
      background: "linear-gradient(to right, rgb(69,67,100), rgb(255,204,153))",
    }}
  >
    <div
      className="flex flex-col items-center justify-top mx-auto py-10"
      style={{
        background: "linear-gradient(to right, #403D52, #A67F70)",
        padding: "5px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "2000px", // Adjust this value to match the experience section
      }}
    >
      <motion.div variants={fadeIn()}>
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#fff",
            marginBottom: "30px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          Testimonials.
        </h2>
      </motion.div>
      <div className="mt-8 w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-7">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={index} {...testimonial} index={index} />
        ))}
      </div>
    </div>
  </div>
);

export default Testimonials;
