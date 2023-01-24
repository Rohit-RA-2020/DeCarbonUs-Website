import Image from "next/image";
import AppLogo from "../../public/Assets/decarbonusLogo.png";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store/auth";

import { useEffect } from "react";
import { auth } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("userData");
    const userResults = localStorage.getItem("userResults");
    if (token == null || token == " " || token == "undefined") {
      onAuthStateChanged(auth, (user) => {
        console.log("from firebase api");
        if (user) {
          // User is signed in, see docs for a list of available properties
          const uid = user.uid;
          // console.log(auth.currentUser)
          console.log("This is from navbar" + uid);
          // dispatch(userActions.login(uid));
          // dispatch(userActions.settingUserInfo(userData));
          // dispatch(userActions.settingUserResults(userResults));
          // ...
        } else {
          // User is signed out
          console.log("no user");
        }
      });
    } else {
      console.log("from local storage");
      dispatch(userActions.login(localStorage.getItem("token")));
      dispatch(userActions.settingUserInfo(JSON.parse(localStorage.getItem("userInfo"))));
      dispatch(userActions.settingUserResults(JSON.parse(localStorage.getItem("userResults"))));
    }
  }, []);


  return (
    <header className="text-gray-400  body-font">
      <div className="container mx-auto flex flex-wrap p-5 sm:p-5 flex-col md:flex-row items-center justify-between">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <Image
            className="w-8 h-8 rounded-full mx-2"
            src={AppLogo}
            alt="Website logo"
          />
          <span className="text-green-700 text-xl font-bold">De</span>
          <span className="text-gray-800 text-xl font-bold">Carbon</span>
          <span className="text-green-700 text-xl font-bold">Us</span>
        </Link>
        <nav className="md:ml-auhref flex flex-wrap items-center text-base justify-center font-semibold">
          <Link
            href="/"
            className={
              props.focused == "home"
                ? "px-2 py-2 mx-2 text-gray-500 border-b-4 border-green-500"
                : "px-2 py-2 mx-2 text-gray-500 hover:border-b-4 hover:border-gray-300"
            }
          >
            Home
          </Link>
          <Link
            href="/aboutUs"
            className={
              props.focused == "about"
                ? "px-2 py-2 mx-2 text-gray-500 border-b-4 border-green-500"
                : "px-2 py-2 mx-2 text-gray-500 hover:border-b-4 hover:border-gray-300"
            }
          >
            About Us
          </Link>
          {!show && (
            <Link
              href="/Login&Signup"
              className={
                props.focused == "auth"
                  ? "px-2 py-2 mx-2 text-gray-500 border-b-4 border-green-500"
                  : "px-2 py-2 mx-2 text-gray-500 hover:border-b-4 hover:border-gray-300"
              }
            >
              Sign In
            </Link>
          )}
          {show && (
            <Link
              href="/Profile"
              className={
                props.focused == "profile"
                  ? "px-2 py-2 mx-2 text-gray-500 border-b-4 border-green-500"
                  : "px-2 py-2 mx-2 text-gray-500 hover:border-b-4 hover:border-gray-300"
              }
            >
              Profile
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
