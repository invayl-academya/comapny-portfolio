import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>

        <form className="bg-gray-50 p-8 rounded-lg shadow-md space-y-6">
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 w-full "
              placeholder="your full Name"
            />
          </div>

          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 w-full "
              placeholder="your Email "
            />
          </div>

          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 w-full "
              placeholder="your Message "
            />
          </div>

          <button className="w-full bg-blue-500  text-slate-100  rounded-xl font-semibold py-2 px-4 hover:bg-blue-700">
            Send Me Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
