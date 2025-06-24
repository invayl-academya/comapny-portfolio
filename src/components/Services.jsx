import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaInternetExplorer, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    title: "web development",
    description:
      "we create fast , modern and responsive websites tailored to your bussiness",
    icon: <FaInternetExplorer />,
  },

  {
    title: "Mobile Applications",
    description:
      "Build cross-platform mobile apps with sleek UI and powerful backend integration.",
    icon: <FaMobileAlt />,
  },
  {
    title: "UI/UX Design",
    description:
      "User-first design with clean, intuitive interfaces that engage your audience.",
    icon: <CgWebsite />,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12">
          We provide a range of digital solutions to help your business thrive.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
