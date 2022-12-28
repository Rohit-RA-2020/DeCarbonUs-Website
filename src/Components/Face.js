import Image from 'next/image'
import AppStore from "../../public/Assets/app_store.png";
import PlayStore from "../../public/Assets/play_store.png";
import React from "react";
const FacePage = () => {
  return (
    <div className="h-180 lg:w-2/3 xl:w-2/3 flex flex-col justify-center align-center mx-auto my-0 pt-10 sm:pt-60 xl:pt-20">
      <div className="lg:w-100 text-center ">
        <span className="text-5xl sm:text-8xl font-semibold text-gray-600 font-openSans">
          Grass can be
        </span>
        <span className="text-5xl sm:text-8xl font-semibold text-green-700 font-openSans ">
          {" "}
          Greener
        </span>
        <span className="text-5xl sm:text-8xl font-semibold text-gray-600 font-openSans ">
          {" "}
          on your side
        </span>
        <p className="my-5 text-sm sm:text-xl text-gray-500 w-2/3 xl:w-1/2 mx-auto my-10">
          DeCarbonUs is an App-based solution to help fight climate change by
          facilitating individuals to reduce and control their carbon footprint.
        </p>
      </div>
      <div className="lg:w-1/2  flex flex-col sm:flex-row justify-around mx-auto ">
        <div className="w-48 sm:w:4/5 mx-auto my-2">
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
        <div className="w-48 sm:w:4/5 mx-auto my-2">
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
  );
};
export default FacePage;
