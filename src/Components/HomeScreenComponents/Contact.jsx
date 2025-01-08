import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion"; // Adjust the import path as needed

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(form);
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
          Get in Touch
        </h2>
      </motion.div>
      <motion.div
        className="p-6 rounded-lg shadow-lg"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "90%",
          maxWidth: "800px",
          margin: "0 auto",
          background: "linear-gradient(to right, #403D52, #A67F70)",
          padding: "20px",
        }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:outline-none"
              rows="4"
            />
          </div>
          <motion.button
            type="submit"
            className="py-2 px-4 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 focus:outline-none transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
