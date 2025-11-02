import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// --- Animation Timings ---
// You can adjust these
const DRAW_DURATION = 3;     // How long the "drawing" takes (in seconds)
const FILL_DELAY = 2.5;  // When the "fill" starts (should be just before drawing ends)
const FILL_DURATION = 1.5;   // How long the "fill" takes
const PHRASE_FADE_IN = 0.5;  // When the phrases appear
const PHRASE_FADE_OUT = 4.0; // When the phrases disappear
const CURTAIN_DELAY = 5.0;   // When the final white curtain appears
const NAVIGATE_DELAY = 6.0;  // When it navigates to the home page

const Loader = () => {
  const navigate = useNavigate();
  const [showPhrase, setShowPhrase] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showCurtain, setShowCurtain] = useState(false);

  useEffect(() => {
    // This sequence orchestrates the whole animation
    setTimeout(() => setShowLogo(true), 0); // Start logo animation immediately
    setTimeout(() => setShowPhrase(true), PHRASE_FADE_IN * 1000);
    setTimeout(() => setShowPhrase(false), PHRASE_FADE_OUT * 1000);
    setTimeout(() => setShowCurtain(true), CURTAIN_DELAY * 1000);
    setTimeout(() => {
      navigate("/"); // Navigate to your home page
    }, NAVIGATE_DELAY * 1000);
  }, [navigate]);

  // Animation properties for the SVG paths
  const pathAnimation = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)", // Start transparent
      stroke: "rgba(100, 100, 100, 1)" // Start with a light grey drawing line
    },
    visible: {
      pathLength: 1,
      // This 'fill' will be animated. We use 'url(#logoGradient)' for the infinity loop
      // and a solid color for the yoga pose.
      fill: [
        "rgba(0, 0, 0, 0)", // Stays transparent during drawing
        "rgba(0, 0, 0, 0)", // Stays transparent during drawing
        "url(#logoGradient)" // Fills with gradient
      ],
      // This 'stroke' will fade out as the fill comes in
      stroke: [
        "rgba(100, 100, 100, 1)",
        "rgba(100, 100, 100, 1)",
        "rgba(100, 100, 100, 0)" // Fades out
      ],
      transition: {
        pathLength: { duration: DRAW_DURATION, ease: "easeInOut" },
        fill: { delay: FILL_DELAY, duration: FILL_DURATION, ease: "easeIn" },
        stroke: { delay: FILL_DELAY, duration: FILL_DURATION, ease: "easeIn" }
      },
    },
  };
  
  // A slightly different animation for the yoga pose (solid fill)
  const yogaPathAnimation = {
    ...pathAnimation, // Inherit the same drawing logic
    visible: {
      ...pathAnimation.visible,
      fill: [
        "rgba(0, 0, 0, 0)", 
        "rgba(0, 0, 0, 0)", 
        "#6A0DAD" // Fill with a solid purple
      ],
      transition: { // Ensure transitions are also inherited
        ...pathAnimation.visible.transition,
         fill: { delay: FILL_DELAY, duration: FILL_DURATION, ease: "easeIn" },
      }
    }
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white relative overflow-hidden">
      
      {/* Logo SVG Animation */}
      <motion.div
        initial="hidden"
        animate={showLogo ? "visible" : "hidden"}
      >
        <motion.svg
          viewBox="0 0 200 200" // IMPORTANT: Adjust this to fit your logo's aspect ratio
          width="250" // Adjust size as needed
          height="250"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 1. Define the Gradient */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              {/* These are guesses for your gradient. Get exact colors from your logo. */}
              <stop offset="0%" style={{ stopColor: "#8A2BE2" }} /> 
              <stop offset="100%" style={{ stopColor: "#007BFF" }} />
            </linearGradient>
          </defs>

          {/* 2. Add Your Logo Paths 
            You MUST replace the 'd' attributes below with the paths from your own SVG file.
            I have created simple placeholders.
          */}
          
          {/* Path for the Infinity Loop */}
          <motion.path
            d="M 50 100 C 10 25, 90 25, 100 100 C 110 175, 190 175, 150 100 C 190 25, 110 25, 100 100" // <-- REPLACE THIS
            variants={pathAnimation}
            strokeWidth="3" // Adjust line thickness
          />
          
          {/* Path for the Yoga Pose */}
          <motion.path
             d="M 100 20 A 10 10 0 1 1 100 40 A 10 10 0 1 1 100 20 M 100 45 L 100 90 M 80 70 L 120 70 M 100 90 L 85 130 M 100 90 L 115 130" // <-- REPLACE THIS
            variants={yogaPathAnimation}
            strokeWidth="3" // Adjust line thickness
          />

        </motion.svg>
      </motion.div>

      {/* Animated Phrase */}
      <div className="flex gap-4 mt-4 absolute bottom-24">
        {["Harmony.", "Balance.", "Serenity."].map((word, index) => (
          <motion.div
            key={index}
            className="text-xl md:text-3xl font-body text-gray-700" // Using 'font-body' from your example
            initial={{ opacity: 0, y: 10 }}
            animate={showPhrase ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              delay: showPhrase ? PHRASE_FADE_IN + index * 0.4 : 0,
              duration: 0.5,
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      {/* Curtain Transition Effect */}
      {showCurtain && (
        <motion.div
          initial={{ y: "100%" }} // Start from bottom
          animate={{ y: 0 }}       // Animate to top
          transition={{ duration: 1.0, ease: [0.6, 0.01, -0.05, 0.9] }} // A smoother ease
          className="fixed top-0 left-0 w-full h-full bg-white z-50"
        />
      )}
    </div>
  );
};

export default Loader;
