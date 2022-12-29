import Image from 'next/image'
import KA from "../../public/Assets/ka.jpg";
import YS from "../../public/Assets/ys.jpg";
import VS from "../../public/Assets/vs.jpg";
import RR from "../../public/Assets/rr.jpg";
import RM from "../../public/Assets/rm.jpg";
import FS from "../../public/Assets/fs.jpg";
import { useState } from "react";
import db from "../Firebase";

function Team() {
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
  };
  return (
    <section className="text-gray-600 body-font px-10">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl sm:text-7xl font-medium title-font mb-4 text-gray-800 tracking-widest">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
            We are all in the same boat, we need to work together to get to
            where we need to be.
          </p>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="p-4 w-full sm:w-1/5 ">
            <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="Rohit Ranjan"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={RR}
              />
              <div className="flex-grow text-center my-3">
                <h2 className="title-font font-medium text-lg text-gray-500">
                  Rohit Ranjan
                </h2>
                <h3 className="text-gray-400 mb-3 my-3 font-semibold">Co-Founder & CEO, CTO</h3>
                <h3 className="text-gray-400 mb-3">Flutter & Backend Developer</h3>
                <span className="inline-flex">
                  <a
                    href="https://www.linkedin.com/in/rohitranjan2020/"
                    target="_blank"
                    className="text-gray-500"
                  >
                    <svg
                      className="w-6 h-6 text-blue-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/Rohitra2020"
                    target="_blank"
                    className="ml-4 text-gray-500"
                  >
                    <svg
                      className="w-6 h-6 text-blue-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 w-full sm:w-1/5 ">
            <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="Khushboo Agnihotri"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={KA}
              />
              <div className="flex-grow text-center my-3">
                <h2 className="title-font font-medium text-lg text-gray-500">
                  Khushboo Agnihotri
                </h2>
                <h3 className="text-gray-400 mb-3 my-3 font-semibold">Co-Founder & COO</h3>
                <h3 className="text-gray-400 mb-3">UI & UX Developer</h3>
                <span className="inline-flex">
                  <a
                    href="https://www.linkedin.com/in/khushboo-agnihotri-4332a8195/"
                    target="_blank"
                    className="text-gray-500"
                  >
                    <svg
                      className="w-6 h-6 text-blue-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/_Khushboo_21"
                    target="_blank"
                    className="ml-4 text-gray-500"
                  >
                    <svg
                      className="w-6 h-6 text-blue-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 w-full sm:w-1/5 ">
            <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="Yash Satankar"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={YS}
              />
              <div className="flex-grow text-center my-3">
                <h2 className="title-font font-medium text-lg text-gray-500">
                  Yash Satankar
                </h2>
                <h3 className="text-gray-400 mb-3 my-3 font-semibold">Co-Founder & CFO</h3>
                <h3 className="text-gray-400 mb-3">Flutter Developer</h3>
                <span className="inline-flex">
                  <a
                    href="https://www.linkedin.com/in/yash-satankar-6b6a2719a/"
                    target="_blank"
                    className="text-gray-500"
                  >
                    <svg
                      className="w-6 h-6 text-blue-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/YashSatankar"
                    target="_blank"
                    className="ml-4 text-gray-500"
                  >
                    <svg
                      className="w-6 h-6 text-blue-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 w-full sm:w-1/5 ">
            <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="Romir Mathur"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={RM}
              />
              <div className="flex-grow text-center my-3">
                <h2 className="title-font font-medium text-lg text-gray-500">
                  Romir Mathur
                </h2>
                <h3 className="text-gray-400 mb-3 my-3 font-semibold">Co-Founder & CMO</h3>
                <h3 className="text-gray-400 mb-3">ML & Web Developer</h3>
                <span className="inline-flex">
                  <a
                    href="https://www.linkedin.com/in/romir-mathur17/"
                    target="_blank"
                    className="text-gray-500"
                  >
                    <svg
                      className="w-6 h-6 text-blue-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/MathurRomir"
                    target="_blank"
                    className="ml-4 text-gray-500"
                  >
                    <svg
                      className="w-6 h-6 text-blue-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 w-full sm:w-1/5 ">
            <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="Vinay Selukar"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={VS}
              />
              <div className="flex-grow text-center my-3">
                <h2 className="title-font font-medium text-lg text-gray-500">
                  Vinay Selukar
                </h2>
                <h3 className="text-gray-400 mb-3 my-3 font-semibold">Lead Engineer</h3>
                <h3 className="text-gray-400 mb-3">Web Developer</h3>
                <span className="inline-flex">
                  <a
                    href="https://www.linkedin.com/in/vinay-selukar-7443b61bb/"
                    target="_blank"
                    className="text-gray-500"
                  >
                    <svg
                      className="w-6 h-6 text-blue-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="ml-4 text-gray-500"
                  >
                    <svg
                      className="w-6 h-6 text-blue-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 w-full sm:w-5/5 ">
            <div className="h-full flex flex-col items-center sm:justify-center justify-center text-center sm:text-center">
              <Image
                alt="Feliz"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={FS}
              />
              <div className="flex-grow text-center my-3">
                <h2 className="title-font font-medium text-lg text-gray-500">
                  Feliz (Sizuka)
                </h2>
                <h3 className="text-gray-400 mb-3 my-3 font-semibold">Lead Entertainer</h3>
                <h3 className="text-gray-400 mb-3">Dog Department</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
      <section class="text-gray-400 bg-gray-900 body-font relative px-10">
        <div class="absolute inset-0 bg-gray-900">
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
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p class="leading-relaxed mb-5 text-gray-900">
              Provide your Feeback with us to help us improve.
            </p>
            <form
              onSubmit={(event) => {
                sub(event);
              }}
            >
              <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-800 font-bold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  class="w-full bg-white rounded border border-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-800 font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  class="w-full bg-white rounded border border-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-800 font-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  class="w-full bg-white rounded border border-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  spellcheck="false"
                  data-ms-editor="true"
                ></textarea>
              </div>
              <button
                type="submit"
                class="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Send
              </button>
            </form>
            <p class="text-xs text-gray-400 mt-3">
              We will reach out to you soon
            </p>
          </div>
        </div>
      </section>
    </section>

  );
}

export default Team;