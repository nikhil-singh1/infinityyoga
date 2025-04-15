// import React from "react";
// import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
// import { FiPhone, FiMail, FiClock } from "react-icons/fi";
// import { MdLocationOn } from "react-icons/md";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-[#000000] to-[#3533cd] text-white py-10">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

//         {/* Logo and Name aligned together */}
//         <div className="flex flex-col items-start gap-4">
//           <div className="flex items-center gap-4">
//             <img
//               src="/yoga_logo1.png"
//               alt="Infinity Yoga"
//               className="h-12 w-auto object-contain"
//             />
//             <h3 className="font-semibold text-xl">Infinity Yoga</h3>
//           </div>
//           <ul className="space-y-2 text-sm">
//             <li className="flex items-center gap-2">
//               <MdLocationOn className="text-lg" />
//               Safdarjung Enclave, New Delhi - 110029
//             </li>
//             <li className="flex items-center gap-2">
//               <FiMail className="text-lg" />
//               info@infinityyoga.in
//             </li>
//             <li className="flex items-center gap-2">
//               <FiPhone className="text-lg" />
//               +91 9811695777
//             </li>
//           </ul>
//         </div>

//         {/* Quick Links */}
//         <div className="flex flex-col items-start">
//           <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="/" className="hover:underline">Home</a></li>
//             <li><a href="/" className="hover:underline">About Us</a></li>
//             <li><a href="/" className="hover:underline">Our Trainers</a></li>
//             <li><a href="/" className="hover:underline">Contact Us</a></li>
//             <li><a href="/" className="hover:underline">FAQ</a></li>
//             <li><a href="/" className="hover:underline">T & C</a></li>
//             <li><a href="/" className="hover:underline">Privacy Policy</a></li>
//           </ul>
//         </div>

//         {/* Opening Hours + Socials */}
//         <div className="flex flex-col items-start">
//           <h3 className="font-semibold text-xl mb-4">Opening Hours</h3>
//           <ul className="space-y-2 text-sm">
//             <li className="flex items-center gap-2">
//               <FiClock className="text-lg" />
//               Mon–Sat: 10:00 AM – 5:00 PM
//             </li>
//             <li className="flex items-center gap-2">
//               <FiClock className="text-lg" />
//               Sunday (Closed)
//             </li>
//           </ul>
//           <div className="flex gap-4 mt-4 text-2xl">
//             <FaFacebook className="hover:text-blue-500 cursor-pointer" />
//             <FaInstagram className="hover:text-pink-500 cursor-pointer" />
//             <FaYoutube className="hover:text-red-500 cursor-pointer" />
//             <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="text-center text-gray-300 text-sm mt-10">
//         <p>&copy; {new Date().getFullYear()} Infinity Yoga. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { lazy, Suspense } from 'react';
import { Link } from "react-router-dom";

// Lazy loading icons
const InstagramIcon = lazy(() => import('lucide-react').then(module => ({ default: module.InstagramIcon })));
const FacebookIcon = lazy(() => import('lucide-react').then(module => ({ default: module.FacebookIcon })));
const LinkedinIcon = lazy(() => import('lucide-react').then(module => ({ default: module.LinkedinIcon })));

// Memoize the Footer to avoid unnecessary re-renders
const Footer = React.memo(() => {
  return (
    <footer className="bg-gradient-to-r from-[#000000] to-[#3533cd] text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Left Section - About */}
          <div className="flex flex-col space-y-2">
         <div className="flex items-center">
           <img
              src="/yoga_logo1.png"
              alt="Infinity Yoga"
              className="h-16 w-auto object-contain"
            />
            <h3 className="font-semibold text-xl">Infinity Yoga</h3>
          </div>
            <p className="text-md text-gray-400 font-dm-sans text-justify mx-4 max-w-4xl">
            At Infinity Yoga, we believe that yoga is more than just a physical practice – it's a way of life. Whether you're looking to improve your flexibility, reduce stress, heal emotionally, or just find a moment of peace, yoga is the answer to everything.
            </p>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col space-y-10 md:items-center">
            <h2 className="text-2xl font-bold text-white font-nourd md:text-center">Follow Us</h2>
            <div className="flex space-x-4 md:space-x-3">
              <Suspense fallback={<div>Loading...</div>}>
                <a href="https://www.instagram.com/potterzwheel_realty?igsh=MWtvb3FuNGY2NnRlYg==" className="text-white hover:text-gray-400">
                  <InstagramIcon className="h-5 w-5 md:h-6 md:w-6" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61559495078889" className="text-white hover:text-gray-400">
                  <FacebookIcon className="h-5 w-5 md:h-6 md:w-6" />
                </a>
                <a href="https://www.linkedin.com" className="text-white hover:text-gray-400">
                  <LinkedinIcon className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              </Suspense>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col space-y-8">
            <h2 className="text-2xl font-bold text-white font-nourd">Quick Links</h2>
            <ul className="space-y-4 text-lg font-dm-sans">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/services" className="hover:underline">Our Services</Link></li>
              <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/termsandconditions" className="hover:underline">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col space-y-8">
            <h3 className="text-2xl font-bold text-white font-nourd">Contact Us</h3>
           
            <p className="text-sm text-gray-200 mt-4">
              <span className="font-bold">Phone:</span> <a href="tel:+919310284204" className="hover:underline">+91-9310284204</a><br />
              <span className="font-bold">Email:</span> <a href="mailto:info@infinityyoga.in" className="hover:underline">info@infinityyoga.in</a><br />
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t-2 border-gray-600" />

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-gray-400 text-sm font-dm-sans">
          <p>&copy; {new Date().getFullYear()} Infinity Yoga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
