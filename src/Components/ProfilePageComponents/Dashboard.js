import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";
import { userActions } from "../../store/auth";
import { useRouter } from "next/router";
import Image from "next/image";
const Dashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const show = useSelector((state) => state.user.isAuthenticated);
  const userInfo = useSelector((state) => state.user.userInfo);
  const userResults = useSelector((state) => state.user.userResults);

  // const userResults = JSON.parse(userResults.results)
  // console.log(userResults)
  
  // const results = {
  //   carTravel: userResults.results.carTravel,
  //   diet: userResults.results.carTravel,
  //   fuel: userResults.results.carTravel,
  //   homePeople: userResults.results.carTravel,
  //   homeSize: userResults.results.carTravel,
  //   pet: userResults.results.carTravel,
  //   result: userResults.results.carTravel,
  //   shopping: userResults.results.carTravel,
  //   travel: userResults.results.carTravel,
  // };
  // console.log(userResults)

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
    <>
      <h1 className="text-gray-800 text-3xl text-center">Your Profile</h1>
      <div className="w-2/3 flex flex-col sm:flex-row  items-center mx-auto">

        <div className="w-full sm:w-1/2">
          <Image
            alt="user image"
            width={500}
            height={500}
            className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center my-5 mx-auto"
            src={userInfo.photo}
          />
          <h1 className="text-gray-800 text-3xl text-center">
            {userInfo.name}
          </h1>
          <p className="text-gray-800 text-xl text-center">{userInfo.email}</p>
        </div>

        <div className="w-full sm:w-1/2 items-center">
          <p className="text-gray-800 text-4xl text-center">{userResults.result}</p>
          <p className="text-gray-500 text-xl text-center">tonns/year</p>
          <p className="text-gray-800 text-xl text-center">
            carTravel: {userResults.carTravel}
          </p>
          <p className="text-gray-800 text-xl text-center">diet: {userResults.diet}</p>
          <p className="text-gray-800 text-xl text-center">fuel: {userResults.fuel}</p>
          <p className="text-gray-800 text-xl text-center">
            homePeople: {userResults.homePeople}
          </p>
          <p className="text-gray-800 text-xl text-center">
            homeSize: {userResults.homeSize}
          </p>
          <p className="text-gray-800 text-xl text-center">pet: {userResults.pet}</p>
          <p className="text-gray-800 text-xl text-center">
            shopping: {userResults.shopping}
          </p>
          <p className="text-gray-800 text-xl text-center">
            travel: {userResults.travel}
          </p>
          </div>
          </div>
          {show && (
            <div className="flex justify-center my-10">
            <button
              onClick={logoutHandler}
              className="px-4 py-2 text-white bg-green-700 rounded-lg hover:shadow-lg focus:bg-white-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Logout
            </button>
            </div>
          )}
    </>
  );
};
export default Dashboard;
