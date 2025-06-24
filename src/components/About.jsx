import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className=" max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            className="rounded-xl shadow-md w-full"
            src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-4">
            At Invayl TechCorp , we're passionate about creating modern digital
            solutions that drive real results. With years of experience in the
            tech industry, our team is dedicated to innovation, excellence, and
            customer satisfaction.
          </p>
          <p className="text-gray-600">
            Whether it's building websites, apps, or custom tools — we’re your
            digital partner in growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
