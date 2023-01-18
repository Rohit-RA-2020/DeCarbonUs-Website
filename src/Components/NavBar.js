import Image from "next/image";
import AppLogo from "../../public/Assets/decarbonusLogo.png";
import Link from "next/link";

import { useSelector , useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase"
import { onAuthStateChanged } from "firebase/auth";

const NavBar=(props)=> {
  
  const dispatch = useDispatch()
  const show = useSelector((state)=>state.auth.isAuthenticated)

  
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token == null || token == " " || token == "undefined") {
      onAuthStateChanged(auth, (user) => {
        console.log("from firebase api")
        if (user) {
          // User is signed in, see docs for a list of available properties
          const uid = user.uid;
          console.log(uid)
          dispatch(authActions.login(uid));
          // ...
        } else {
          // User is signed out
          console.log("no user")
        }
      });
    }else{
      console.log("from local storage")
      dispatch(authActions.login(localStorage.getItem("token")));
    }
},[])
  
  
  const logoutHandler=(event)=>{
    event.preventDefault()
    signOut(auth).then(() => {
      dispatch(authActions.logout())
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log("not signed out")
    });
  }

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
          {show && <button onClick={logoutHandler} className="px-2 py-2 mx-2 text-gray-500 hover:border-b-4 hover:border-gray-300">Logout</button>}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
