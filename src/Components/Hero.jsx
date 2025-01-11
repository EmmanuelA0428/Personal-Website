import React from "react";
import logo from "../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faPen,
  faLaptop,
  faBible,
  faCoffee,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen"
      style={{
        background:
          "linear-gradient(to right, rgb(69,67,100), rgb(255,204,153))",
      }}
    >
      <div className="flex flex-col md:flex-row items-center space-x-6 mb-40 relative">
        <img
          src={logo}
          alt="logo"
          className="rounded-full mask"
          style={{ width: "600px", height: "600px" }}
        />
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Emmanuel Appiah
          </h1>
          <p className="text-white text-lg md:text-xl">
            "Hi, I'm Emmanuel Appiah, a data analysis student with a strong
            passion
            <br />
            for turning data into actionable insights. I'm constantly learning
            and
            <br />
            applying new techniques to solve real-world problems. Join me on
            <br />
            this journey of discovery as I use data to drive smarter decisions!"
          </p>
        </div>
      </div>
    </div>
  );
};

const IconWithTooltip = ({ icon, tooltipText }) => (
  <div className="relative group">
    <FontAwesomeIcon
      icon={icon}
      className="text-white text-4xl transition-transform transform hover:scale-125"
    />
    <div
      className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded py-2 px-4 w-56 text-center"
      style={{
        whiteSpace: "nowrap",
      }}
    >
      {tooltipText}
    </div>
  </div>
);

export default Hero;

// Removed code related to the flying object and its interactions
/*
import { motion, AnimatePresence } from "framer-motion";
import { interpolate } from "flubber";
import { shapes, SvgComponent } from "../assets/svgComponents";

const [showPopup, setShowPopup] = useState(false);
const [popupContent, setPopupContent] = useState("");
const [animationPositions, setAnimationPositions] = useState({
  start: -1500,
  end: 0,
});
const [currentShapeIndex, setCurrentShapeIndex] = useState(0);
const [path, setPath] = useState(shapes[0]);
const [revealedParts, setRevealedParts] = useState([false, false, false]);

const shapeDescriptions = [
  "This shape represents innovation and creativity.",
  "This shape symbolizes stability and reliability.",
  "This shape stands for balance and harmony.",
];

useEffect(() => {
  const endPosition = window.innerWidth + 100;
  setAnimationPositions({ start: 100, end: endPosition });
}, []);

const handleObjectClick = () => {
  const nextShapeIndex = (currentShapeIndex + 1) % shapes.length;
  const nextShapeDescription = shapeDescriptions[nextShapeIndex];
  setPopupContent(nextShapeDescription);
  setShowPopup(true);

  const interpolator = interpolate(
    shapes[currentShapeIndex],
    shapes[nextShapeIndex]
  );
  setCurrentShapeIndex(nextShapeIndex);

  let currentStep = 0;
  const steps = 60;
  const animateMorph = () => {
    if (currentStep <= steps) {
      const t = currentStep / steps;
      setPath(interpolator(t));
      currentStep++;
      requestAnimationFrame(animateMorph);
    }
  };
  animateMorph();

  setRevealedParts((prevParts) => {
    const newParts = [...prevParts];
    newParts[nextShapeIndex] = true;
    return newParts;
  });
};

<motion.div
  initial={{ x: animationPositions.start }}
  animate={{ x: animationPositions.end }}
  transition={{
    duration: 20,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  }}
  onClick={handleObjectClick}
  className="z-10 cursor-pointer"
>
  <SvgComponent path={path} />
</motion.div>

<AnimatePresence>
  {showPopup && (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 bg-white p-6 rounded-t-lg shadow-lg text-lg z-50"
    >
      <p className="text-xl font-bold text-center">{popupContent}</p>
      <button
        onClick={() => setShowPopup(false)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded block mx-auto"
      >
        Close
      </button>
    </motion.div>
  )}
</AnimatePresence>
*/
