import Image from "next/image";
import AppLogo from "../../public/Assets/decarbonusLogo.png";
import Link from "next/link";

const NavBar=(props)=> {
  return (
    <header className="text-gray-400  body-font">
      <div className="container mx-auto flex flex-wrap p-5 sm:p-5 flex-col md:flex-row items-center justify-between">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <Image
            className="w-10 h-10 rounded-full mx-2"
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
              props.focused == "login"
                ? "px-2 py-2 mx-2 text-gray-500 border-b-4 border-green-500"
                : "px-2 py-2 mx-2 text-gray-500 hover:border-b-4 hover:border-gray-300"
            }
          >
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
