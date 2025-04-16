import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import ImageSlider from "./Hero";

export default function HeroWithForm() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_ah41mhb";
    const templateID = "template_pzfucag";
    const userID = "drJNNttci6yuaQ-BD";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send the message. Please try again.");
        console.error("EmailJS Error:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="relative">
      <ImageSlider />

      {/* Floating Form */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-[40%] md:-bottom-[15%] z-20 w-[70%] md:w-[80%] max-w-5xl">
        <div className="bg-blue-950 p-4 md:p-6 rounded-3xl shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">
            Book a Demo
          </h2>
          <form
            ref={form}
            onSubmit={onFormSubmit}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
              className="px-5 py-3 rounded-full w-full md:w-[22%] text-sm focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              required
              className="px-5 py-3 rounded-full w-full md:w-[22%] text-sm focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
              className="px-5 py-3 rounded-full w-full md:w-[22%] text-sm focus:outline-none"
            />
            <div className="flex w-full md:w-[70%]">
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Location/Timing/Purpose of Yoga"
                required
                className="px-5 py-3 rounded-l-full w-full text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-r-full text-sm hover:bg-yellow-600 transition"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
