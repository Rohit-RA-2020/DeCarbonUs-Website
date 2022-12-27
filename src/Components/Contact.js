import React from "react";
import { useState } from "react";
// import db from "../Firebase";

const Contact=()=> {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
//   const sub = (e) => {
//     e.preventDefault();
//     if (email != "" || name != "" || message != "") {
//       db.collection("feedback")
//         .doc(new Date().toISOString())
//         .set({
//           name: name,
//           email: email,
//           message: message,
//         })
//         .then(() => {
//           alert("Thank you for your feedback");
//         })
//         .catch((error) => {
//           alert(error.message);
//         });
//     } else {
//       alert("Please enter all the fields.");
//     }
//   };
  return (
    <section className="text-gray-800 bg-gray-900 body-font relative px-10">
      <div className="absolute inset-0 bg-gray-900">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119064.89582577244!2d79.00247009412276!3d21.16123152919531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1660422162412!5m2!1sen!2sin"
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <h2 className="text-gray-800 text-lg mb-1 font-medium title-font">
            We would like to know what you think about our mission :)
          </h2>
          <p className="leading-relaxed mb-5 text-sm text-gray-800">
            Provide your Feeback with us to help us improve.
          </p>
          <form
            // onSubmit={(event) => {
            //   sub(event);
            // }}
          >
            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm text-gray-800">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                spellcheck="false"
                data-ms-editor="true"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Send
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-3">
            We will reach out to you soon
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;