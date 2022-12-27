import Image from 'next/image'
import classes from "./NavBar.module.css";
import AppLogo from "../../public/Assets/decarbonusLogo.png";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";

import Link from "next/link";

function NavBar() {
  return (
    <header className="text-gray-400  body-font">
      <div className="container mx-auto flex flex-wrap p-5 sm:p-5 flex-col md:flex-row items-center justify-between">
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <Image
            className="w-10 h-10 rounded-full mx-2"
            src={AppLogo}
            alt="Website logo"
          />
          <span className={classes.logo_color_green}>De</span>
          <span className={classes.logo_color_grey} >Carbon</span>
          <span className={classes.logo_color_green}>Us</span>
        </Link>
        <nav className="md:ml-auhref flex flex-wrap items-center text-base justify-center">
          <Link href="/aboutUs" className={classes.nav_items}>
            About Us
          </Link>
          <Link href="/Login&Signup" className={classes.nav_items}>
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
