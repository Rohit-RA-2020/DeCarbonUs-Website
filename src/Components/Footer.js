import Link from "next/link";
import Image from "next/image";
import AppLogo from "../../public/Assets/decarbonusLogo.png";
const Footer = () => {
  return (
    <footer className="text-gray-600 bg-gray-200 body-font">
      <div className="container sm:px-20 py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-full sm:w-1/3  flex-shrink-0 md:mx-0 md:text-left">
          <div className="px-3 py-3 flex title-font font-medium items-center justify-start justify-center text-gray-900">
            <Image
              className="w-10 h-10 rounded-full mr-2"
              src={AppLogo}
              alt="Website logo"
            />
            <span className="text-green-700 text-xl font-bold">De</span>
            <span className="text-gray-800 text-xl font-bold">Carbon</span>
            <span className="text-green-700 text-xl font-bold">Us</span>
          </div>
          <div className="flex flex-row justify-center">
            <span className="text-lg font-bold">Made with</span>&nbsp;
            <span className="text-lg font-bold">❤️</span>&nbsp;
            <span className="text-lg font-bold">in India</span>
          </div>
          <Link className="flex flex-row justify-center my-2" href="mailto:decarbonus.in@gmail.com">decarbonus.in@gmail.com</Link>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">About</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Projects</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Blog</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">FAQ</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              LEGAL
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Imprint</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
            </nav>
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start mx-auto my-8">
            <Link
              className="ml-3 text-blue-500"
              href="https://www.twitter.com/decarbonus"
              target="_blank"
            >
              <svg
                fill="#00acee"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link
              className="ml-3 text-gray-500"
              href="https://www.instagram.com/decarbonus"
              target="_blank"
            >
              <svg
                fill="white"
                stroke="#b03094"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link
              className="ml-3 text-gray-500"
              href="https://www.instagram.com/decarbonus"
              target="_blank"
            >
              <svg
                fill="white"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-9 h-9"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                ></path>
              </svg>
            </Link>
            <Link
              className="ml-3 text-gray-500"
              href="https://www.linkedin.com/company/decarbonus"
              target="_blank"
            >
              <svg
                fill="#0071ac"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5">
          <div className=" flex justify-center align-middle text-gray-800 text-sm ">
            <p className="my-auto"> © 2023 DeCarbonUs --</p> &nbsp; &nbsp;
            <Image
              className="w-5 h-5 rounded-full my-auto"
              src={AppLogo}
              alt="Website logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
