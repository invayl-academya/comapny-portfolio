import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "Services", "About", "Contact"];
  return (
    <>
      <nav className=" bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600">
            <a href="#hero">Invayl TechCorp</a>
          </div>

          <ul className="hidden md:flex flex space-x-5 font-medium  ">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  className="hover:text-blue-600 cursor-pointer"
                  href={`#${link.toLowerCase()}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-700 "
          >
            {isOpen ? <FaTimes /> : <IoIosMenu />}
          </button>
        </div>
      </nav>
      {/* Mobile View  */}
      <div
        className={`md:hidden fixed top-0 lef-0 h-full w-64 bg-white shadow-lg z-40 transform transition
             duration-300 ease-in-out ${
               isOpen ? "translate-x-0" : "-translate-x-full"
             }`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold text-blue-600 mb-6">
            Invayl TechCorp
          </h2>
          <ul className="space-y-4 font-medium text-gray-700 ">
            {links.map((link, index) => (
              <li
                className="hover:text-blue-600 cursor-pointer"
                key={index}
                onClick={() => setIsOpen(false)}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* // backdrop  */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-00 opacity-40 z-30 "
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
