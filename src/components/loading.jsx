import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const navigate = useNavigate();
  const [showLetters, setShowLetters] = useState(false);
  const [showYoga, setShowYoga] = useState(false);
  const textInfinity = "NFINITY";
  const textYoga = "YOGA";

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowLetters(true), 1000),     // Start INFINITY reveal
      setTimeout(() => setShowYoga(true), 2500),        // Start YOGA reveal
      setTimeout(() => navigate("/"), 4400),            // Navigate away
    ];

    return () => timers.forEach(clearTimeout);
  }, [navigate]);

  return (
    <div className="grid grid-col-1 md:grid-cols-2 h-screen bg-gradient-to-r from-[#000000]  to-[#3533cd] text-white font-bold font-heading">
      {/* LEFT GRID */}
      <div className="flex justify-center items-center">
        <img
          src="/logo_loader.png" // replace with your actual GIF path
          alt="Yoga Loader"
          className="w-full h-full object-contain blink-animation"
      
        />
      </div>


      {/* RIGHT GRID */}
      <div className="flex justify-center items-center">
        <img
          src="/loader.gif" // replace with your actual GIF path
          alt="Yoga Loader"
          className="w-3/4 h-auto object-contain"
          style={{
            filter: "invert(1)",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
