import ImageSlider from "./Hero";

export default function HeroWithForm() {
  return (
    <div className="relative">
      <ImageSlider />

      {/* Floating Form */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-[15%] z-20 w-[80%] max-w-5xl">
        <div className="bg-blue-950  p-4 md:p-6 rounded-3xl shadow-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Book a Demo</h2>
          <form className="flex flex-wrap items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Name"
              className="px-5 py-3 rounded-full w-full md:w-[22%] text-sm focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone"
              className="px-5 py-3 rounded-full w-full md:w-[22%] text-sm focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-5 py-3 rounded-full w-full md:w-[22%] text-sm focus:outline-none"
            />
            <div className="flex w-full md:w-[70%]">
              <input
                type="text"
                placeholder="Location/Timing/Purpose of Yoga"
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
