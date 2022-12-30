import Image from "next/image";
import React from "react";
import { useState } from "react";
import db from "../Firebase";
import connect from "../../public/Assets/connect.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sub = (e) => {
    e.preventDefault();
    if (email != "" || name != "" || message != "") {
      db.collection("feedback")
        .doc(new Date().toISOString())
        .set({
          name: name,
          email: email,
          message: message,
        })
        .then(() => {
          alert("Thank you for your feedback");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Please enter all the fields.");
    }
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <section className="text-gray-400 body-font relative px-0 sm:px-10">
      <div className="container px-5 py-24 mx-auto flex flex-col sm:flex-row">
        <div className="lg:w-2/3 md:w-1/2 mx-0">
          <Image className="px-0 sm:px-20" src={connect}></Image>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white shadow-lg rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">
            Want to tell us something?
          </h2>
          <p className="leading-relaxed mb-5 text-gray-900">
            Provide your Feeback with us to help us improve.
          </p>
          <form
            onSubmit={(event) => {
              sub(event);
            }}
          >
            <div className="relative mb-4">
              <label
                for="name"
                className="leading-7 text-sm text-gray-800 font-bold"
              >
                Name
              </label>
              <input
                value={name}
                placeholder="Your Name"
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white rounded border border-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                for="email"
                className="leading-7 text-sm text-gray-800 font-bold"
              >
                Email
              </label>
              <input
                value={email}
                placeholder="example:youremail@gmail.com"
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white rounded border border-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                for="message"
                className="leading-7 text-sm text-gray-800 font-bold"
              >
                Message
              </label>
              <textarea
                value={message}
                placeholder="Say something you would like to tell us"
                id="message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white rounded border border-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
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
};

export default Contact;
