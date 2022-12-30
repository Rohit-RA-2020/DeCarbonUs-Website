import Image from "next/image";
import KA from "../../public/Assets/ka.jpg";
import YS from "../../public/Assets/ys.jpg";
import VS from "../../public/Assets/vs.jpg";
import RR from "../../public/Assets/rr.jpg";
import RM from "../../public/Assets/rm.jpg";
import FS from "../../public/Assets/fs.jpg";

const Team = () => {
  return (
    <section className="text-gray-600 body-font px-10">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20 ">
          <h1 className="text-3xl sm:text-7xl font-medium title-font mb-4 text-gray-800 tracking-widest">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
            We are all in the same boat, we need to work together to get to
            where we need to be.
          </p>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="p-4 w-full sm:w-1/3 ">
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
                <h3 className="text-gray-400 mb-3 my-3 font-semibold">
                  Co-Founder & CEO, CTO
                </h3>
                <h3 className="text-gray-400 mb-3">
                  Flutter & Backend Developer
                </h3>
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
          <div className="p-4 w-full sm:w-1/3 ">
            <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="Khushboo Agnihotri"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={KA}
                height={48}
                width={48}
              />
              <div className="flex-grow text-center my-3">
                <h2 className="title-font font-medium text-lg text-gray-500">
                  Khushboo Agnihotri
                </h2>
                <h3 className="text-gray-400 mb-3 my-3 font-semibold">
                  Co-Founder & COO
                </h3>
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
          <div className="p-4 w-full sm:w-1/3 ">
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
                <h3 className="text-gray-400 mb-3 my-3 font-semibold">
                  Co-Founder & CFO
                </h3>
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
          <div className="p-4 w-full sm:w-1/3 ">
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
                <h3 className="text-gray-400 mb-3 my-3 font-semibold">
                  Co-Founder & CMO
                </h3>
                <h3 className="text-gray-400 mb-3">Data Analyst</h3>
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
          <div className="p-4 w-full sm:w-1/3 ">
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
                <h3 className="text-gray-400 mb-3 my-3 font-semibold">
                  Lead Engineer
                </h3>
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
                  <a href="/" target="_blank" className="ml-4 text-gray-500">
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
          <div className="p-4 w-full sm:w-1/3 ">
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
                <h3 className="text-gray-400 mb-3 my-3 font-semibold">
                  Lead Entertainer
                </h3>
                <h3 className="text-gray-400 mb-3">Dog Department</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
