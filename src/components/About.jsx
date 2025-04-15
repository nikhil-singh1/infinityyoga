import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#3533cd] text-white p-10 px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between md:gap-20">
        {/* Text section */}
        <div className="w-full md:w-1/2 space-y-6 md:pr-8 px-10">
          <h1 className="text-4xl lg:text-5xl font-extrabold">About Us</h1>
          <p className="text-lg font-semibold italic">Infinity Yoga - Yoga without limits</p>
          <p className="text-base lg:text-lg font-medium">
            At Infinity Yoga, we believe that yoga is more than just a physical practice – it's a way of life. Whether you're looking to improve your flexibility, reduce stress, heal emotionally, or just find a moment of peace, yoga is the answer to everything.
          </p>
          <p className="text-sm lg:text-base font-semibold">
            We welcome all levels – from beginners taking their first breath on the mat to advanced yogis deepening their practice. Our sessions combine traditional wisdom with modern science, offering a holistic approach that nurtures the body, mind, and soul. Join us and experience how yoga can truly be for everything – anytime, anywhere, for everyone.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <button
              className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
              onClick={() => navigate("/explore")}
            >
              Explore More
            </button>
          </div>
        </div>

        {/* Image section */}
        <img
          className="rounded-lg w-1/3 max-h-[400px] object-cover mx-auto"
          src="/about_us.jpg"
          alt="Infinity Yoga"
        />
      </div>
    </div>
  );
};

export default About;
