import Lottie from "lottie-react";
import fummingFactory from "../../public/Assets/Animations/about_animations/fumming_factory.json";
import connectWithFriends from "../../public/Assets/Animations/about_animations/connectWithFriends_1.json";
import personalized_tracks from "../../public/Assets/Animations/about_animations/personalized_tracks.json";
import NGO from "../../public/Assets/Animations/about_animations/NGO.json";
import Link from "next/link";
const About = () => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap justify-center">
        <div className="lg:w-1/5 md:w-full text-left px-4 py-6 my-2 mx-3 border-2 rounded-3xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-gray-500 ">
          <div className="h-36  mb-4">
            <Lottie className="h-36" animationData={fummingFactory} />
          </div>
          <h2 className="text-green-800 text-lg title-font font-medium mb-3">
            Analyze for C02 emission
          </h2>
          <p className="leading-relaxed text-gray-500 text-base mb-4">
            Answer some questions and get a instant report on your carbon
            footprint.
          </p>
          <Link
            href="/CalculateEmission"
            className="text-green-800 inline-flex items-center"
          >
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>className=
            </svg>
          </Link>
        </div>
        <div className="lg:w-1/5 md:w-full text-left px-4 py-6 my-2 mx-3 border-2 rounded-3xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-gray-500">
        <div className="h-36  mb-4">
        <Lottie className="h-36" animationData={personalized_tracks} />
          </div>
          <h2 className="text-green-800 text-lg title-font font-medium mb-3">
            Get Personalized tracks
          </h2>
          <p className="leading-relaxed text-gray-500 text-base mb-4">
            Follow personalized tracks to offset your emisson and move towards
            sustanaibility.
          </p>
          <Link
            href="/tracks"
            className="text-green-800 inline-flex items-center"
          >
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
        <div className="lg:w-1/5 md:w-full text-left px-4 py-6 my-2 mx-3 border-2 rounded-3xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-gray-500">
        <div className="h-36  mb-4">
        <Lottie className="h-36" animationData={connectWithFriends} />
          </div>
          <h2 className="text-green-800 text-lg title-font font-medium mb-3">
            Connect with your friends
          </h2>
          <p className="leading-relaxed text-gray-500 text-base mb-4">
            Find your friends and learn how they contribute towards making this
            world a better place to live.
          </p>
          <Link
            href="#"
            className="text-green-800 inline-flex items-center"
          >
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
        <div className="lg:w-1/5 md:w-full text-left px-4 py-6 my-2 mx-3 border-2 rounded-3xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-gray-500">
        <div className="h-36  mb-4">
        {/* <Image className="h-40 w-auto mx-auto"  src={NGO}></Image> */}
        <Lottie className="h-36" animationData={NGO} />
          </div>
          <h2 className="text-green-800 text-lg title-font font-medium mb-3">
            Explore local NGOs
          </h2>
          <p className="leading-relaxed text-gray-500 text-base mb-4">
            Want to contribute?. Explore local NGO events around you and help
            them as volunteers.
          </p>
          <Link
            href="#"
            className="text-green-800 inline-flex items-center"
          >
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default About;
