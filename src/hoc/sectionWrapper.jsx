import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { Component } from "react";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7x1 mx-auto relative z-0`}
        style={{
          background:
            "linear-gradient(to right, rgb(69,67,100), rgb(255,204,153))",
        }}
      >
        <span className="hash-span" id={idName}></span> &nbsp;
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
