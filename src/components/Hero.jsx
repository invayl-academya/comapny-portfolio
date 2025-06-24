import React from "react";

const Hero = () => {
  return (
    <section className="bg-blue-50 py-20" id="hero">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 ">
          Empowering Your Digital Presence
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We build modern website And Apps to help your bussiness grow
        </p>

        <button className="mt-6 px-6  bg-blue-300 text-white  rounded-3xl p-2 cursor-pointer border-none hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
