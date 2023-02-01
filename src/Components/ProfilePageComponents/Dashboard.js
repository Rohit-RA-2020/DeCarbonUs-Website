import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";
import { userActions } from "../../store/auth";
import { useRouter } from "next/router";
import Navigation from "./Navigation";
import Image from "next/image";
const Dashboard = () => {
  const people = [
    {
      id: 1,
      name: "John Doe",
      image:
        "https://firebasestorage.googleapis.com/v0/b/decarbonus-c1037.appspot.com/o/profile.png?alt=media&token=b7fb1269-59bd-4e66-b3f5-a5cd268d9840",
    },
    {
      id: 2,
      name: "Jane Doe",
      image:
        "https://firebasestorage.googleapis.com/v0/b/decarbonus-c1037.appspot.com/o/profile.png?alt=media&token=b7fb1269-59bd-4e66-b3f5-a5cd268d9840",
    },
    {
      id: 3,
      name: "Bob Smith",
      image:
        "https://firebasestorage.googleapis.com/v0/b/decarbonus-c1037.appspot.com/o/profile.png?alt=media&token=b7fb1269-59bd-4e66-b3f5-a5cd268d9840",
    },
  ];

  const router = useRouter();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const userResults = useSelector((state) => state.user.userResults);

  const logoutHandler = (event) => {
    event.preventDefault();
    signOut(auth)
      .then(() => {
        dispatch(userActions.logout());
        // Sign-out successful.
        router.push("/Login&Signup");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        console.log("not signed out");
      });
  };

  return (
    <section className="flex flex-col sm:flex-row">
      <nav className="flex items-center justify-between my-2 sm:hidden">
        <div className="flex items-center">
          <img
            alt="user image"
            className="w-10 h-10 rounded-full mx-2"
            src={userInfo.photo}
          />
          <h1 className="text-green-600 mx-2">{userInfo.name}</h1>
        </div>
        <button className="text-green-600 mx-2" onClick={logoutHandler}>
          Logout
        </button>
      </nav>
      <div className="hidden sm:block bg-gray-800 h-screen sm:w-1/5">
        <div className="p-4">
          <h2 className="text-white text-2xl text-center">My Profile</h2>
          <Image
            alt="user image"
            width={500}
            height={500}
            className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center my-5 mx-auto"
            src={userInfo.photo}
          />
          <p className="text-white text-xl mt-4 text-center">
            {userInfo.name}
          </p>
          <p className="text-gray-400 text-md mt-4 text-center">
            {userInfo.email}
          </p>
        </div>
        <div className="border-t border-gray-700 mt-8">
          <nav className="mt-4">
            <a
              className="text-white font-medium block p-4 text-center"
              href="/"
            >
              Home
            </a>
            <a
              className="text-white font-medium block p-4 text-center"
              href="/CalculateEmission"
            >
              Emission Calculator
            </a>
            <a
              className="text-white font-medium block p-4 text-center"
              href="#"
            >
              Settings
            </a>
            <button
              className="text-white font-medium block p-4 text-center mx-auto"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </nav>
        </div>
      </div>

      <div className="bg-gray-100 p-4 sm:w-4/5">
        <div className="flex flex-wrap flex-col sm:flex-row">
          <div className="bg-gray-100 p-4 w-full">
            <h1 className="text-gray-800 font-bold text-3xl mb-5">
              My Dashboard
            </h1>
            <div className="flex flex-col sm:flex-row">
              <div className="bg-white py-5 px-10 shadow-md rounded-lg sm:w-1/5">
                <h2 className="text-gray-700 text-lg font-medium border-b-2">
                  Result
                </h2>
                <p className="text-gray-700 mt-4 text-5xl">
                  {userResults.result}
                </p>
                <p className="text-gray-500">tons/year</p>
              </div>

              <div
                className="my-8 mx-8
               flex flex-wrap sm:w-4/5"
              >
                <div className="w-1/2 sm:w-1/6 p-4 ">
                  <h2 className="text-gray-500 sm:text-sm border-b-2">
                    Car Travel
                  </h2>
                  <p className="text-gray-800 text-3xl mt-4">
                    {userResults.carTravel}
                  </p>
                </div>
                <div className="w-1/2 sm:w-1/6 p-4 ">
                  <h2 className="text-gray-500 sm:text-sm border-b-2">Diet</h2>
                  <p className="text-gray-800 text-3xl mt-4">
                    {userResults.diet}
                  </p>
                </div>
                <div className="w-1/2 sm:w-1/6 p-4 ">
                  <h2 className="text-gray-500 sm:text-sm border-b-2">Fuel</h2>
                  <p className="text-gray-800 text-3xl mt-4">
                    {userResults.fuel}
                  </p>
                </div>
                <div className="w-1/2 sm:w-1/6 p-4 ">
                  <h2 className="text-gray-500 sm:text-sm border-b-2">
                    Family
                  </h2>
                  <p className="text-gray-800 text-3xl mt-4">
                    {userResults.homePeople}
                  </p>
                </div>
                <div className="w-1/2 sm:w-1/6 p-4 ">
                  <h2 className="text-gray-500 sm:text-sm border-b-2">
                    Home Size
                  </h2>
                  <p className="text-gray-800 text-3xl mt-4">
                    {userResults.homeSize}
                  </p>
                </div>
                <div className="w-1/2 sm:w-1/6 p-4 ">
                  <h2 className="text-gray-500 sm:text-sm border-b-2">Pet</h2>
                  <p className="text-gray-800 text-3xl mt-4">
                    {userResults.pet}
                  </p>
                </div>
                <div className="w-1/2 sm:w-1/6 p-4 ">
                  <h2 className="text-gray-500 sm:text-sm border-b-2">
                    Shopping
                  </h2>
                  <p className="text-gray-800 text-3xl mt-4">
                    {userResults.shopping}
                  </p>
                </div>
                <div className="w-1/2 sm:w-1/6 p-4 ">
                  <h2 className="text-gray-500 sm:text-sm border-b-2">
                    Travel
                  </h2>
                  <p className="text-gray-800 text-3xl mt-4">
                    {userResults.travel}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 sm:w-1/2">
            <h1 className="text-gray-800 text-2xl">Activity</h1>
            <div className="mt-8 flex">
              <div className="w-1/3 p-4">
                <h2 className="text-gray-500 text-md border-b-2">
                  Plant a tree
                </h2>
                <p className="text-gray-800 text-3xl mt-4"></p>
              </div>
              <div className="w-1/3 p-4 ml-4">
                <h2 className="text-gray-500 text-md border-b-2">Eat vegan</h2>
                <p className="text-gray-800 text-3xl mt-4"></p>
              </div>
              <div className="w-1/3 p-4 ml-4">
                <h2 className="text-gray-500 text-md border-b-2">
                  Public transport
                </h2>
                <p className="text-gray-800 text-3xl mt-4"></p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 sm:w-1/2">
            <h1 className="text-gray-800 text-2xl">Top Performers</h1>
            <div className="p-4 text-white">
              <ul>
                {people.map((person) => (
                  <li className="flex items-center mb-4" key={person.id}>
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="ml-4 text-gray-800 text-md">
                      {person.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row bg-green-100 p-6 shadow-md rounded-3xl my-3">
          <div className=" ">
            <h2 className="text-gray-700 text-3xl font-medium">
              Personalized Tracks
            </h2>
            <p className="text-gray-500 mt-4">Get Personalized tracks</p>
          </div>
          <div className="flex flex-col sm:flex-row w-5/6">
            <div className="bg-white p-6 shadow-md rounded-3xl my-3 mx-0 sm:mx-3  h-20vh ">
              <h2 className="text-lg font-medium text-gray-700 text-center">
                title
              </h2>
              <p className="text-sm text-gray-700 mt-4 text-center">
                description
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-3xl my-3 mx-0 sm:mx-3  h-20vh ">
              <h2 className="text-lg font-medium text-gray-700 text-center">
                title
              </h2>
              <p className="text-sm text-gray-700 mt-4 text-center">
                description
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-3xl my-3 mx-0 sm:mx-3  h-20vh ">
              <h2 className="text-lg font-medium text-gray-700 text-center">
                title
              </h2>
              <p className="text-sm text-gray-700 mt-4 text-center">
                description
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
