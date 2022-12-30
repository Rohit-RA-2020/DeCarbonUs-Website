import React from "react";
import { useState } from "react";
import db from "../Firebase";
import Image from 'next/image'
import DCU from "../../public/Assets/dcu.png";
import AppStore from "../../public/Assets/app_store.png";
import PlayStore from "../../public/Assets/play_store.png";

const Hero = () => {
    const [email, SetEmail] = useState("");
    const sub = (e) => {
      e.preventDefault();
      if (email != "") {
        db.collection("emails")
          .doc(new Date().toISOString())
          .set({
            email: email,
          })
          .then(() => {
            alert("Email added successfully");
          })
          .catch((error) => {
            alert(error.message);
          });
      } else {
        alert("Please enter an email address.");
      }
      SetEmail("");
    };
  return (
    <section className="w-full text-gray-800 bg-white-900 body-font">
      <div className="w-fullcontainer flex px-0 pt-24 flex-col items-center">


        <div className="w-full sm:w-full flex justify-center">
          <Image className="h-100 rounded-lg" alt="App Photos" src={DCU} />
        </div>


        <div className="lg:flex-grow md:w-full flex flex-col md:items-start md:text-left items-center py-20 bg-hero-bkg bg-cover bg-cente">
          <h1 className="text-center text-4xl sm:text-6xl  mb-4 font-medium text-black mx-auto">
            Let's stay in touch!
          </h1>
          <p className="mb-8 w-1/2 leading-relaxed text-gray-500 text-center mx-auto">
            Currently we are only available on android. Enter your email below
            to sign up for web & ios version
          </p>
          <form
            className="w-full sm:w-3/5 mx-auto"
          onSubmit={(event) => {
            sub(event);
          }}
          >
            <div className="flex flex-col w-full justify-center items-end">
              <div className="flex relative w-full sm:w-1/2 md:w-full lg:w-full  mx-auto justify-center">
                <input
                value={email}
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-1/2  bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base outline-none text-black-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-2 "
                  spellcheck="false"
                  placeholder="Enter your email"
                  data-ms-editor="true"
                  onChange={(e) => SetEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg mx-auto"
              >
                Send
              </button>
            </div>
          </form>
          <p className="text-sm mt-2 text-gray-500 mb-8 w-full text-center">
            We will notify you soon
          </p>

          <div className="lg:w-80  flex flex-col sm:flex-row  mx-auto ">
            <div className="w-32 sm:w:4/5 mx-auto my-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.rohitranjan.decarbonus&hl=en_IN&gl=US"
                target="_blank"
                className="w-3/4 sm:w-1/2"
              >
                <Image
                  className="object-scale-down"
                  alt="Get it on Google Play"
                  src={PlayStore}
                />
              </a>
            </div>

            <div className="w-32 sm:w:4/5 mx-auto my-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.rohitranjan.decarbonus&hl=en_IN&gl=US"
                target="_blank"
                className="w-3/4 sm:w-1/2"
              >
                <Image
                  className="object-scale-down"
                  alt="Get it on Google Play"
                  src={AppStore}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
