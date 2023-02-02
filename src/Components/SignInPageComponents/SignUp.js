import { React, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/auth";
// import { dataActions } from "../../store/userData";
import { auth, db } from "../../Firebase";
import { useRouter } from "next/router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  // signInWithCredential,
  // sendEmailVerification
} from "firebase/auth";

import Lottie from "lottie-react";
import SignUp from "../../../public/Assets/Animations/SigninPageAnimations/SignUp.json";
import Login from "../../../public/Assets/Animations/SigninPageAnimations/Login.json";
import loading from "../../../public/Assets/Animations/loading.json";
import success from "../../../public/Assets/Animations/Success.json";

let date = new Date();
const SignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // const show = useSelector((state)=>state.auth.isAuthenticated)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const userDataHandler = (uid) => {
    db.collection("users")
      .doc(uid)
      .get()
      .then((value) => {
        const data = value.data();
        const userInfo = {
          name: data.name,
          email: data.email,
          photo: data.photo,
        };
        const userResults = data.results;
        dispatch(userActions.settingUserInfo(userInfo));
        dispatch(userActions.settingUserResults(userResults));
        pushToPage()
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const pushToPage =()=>{
    setIsLoading(false);
        setIsSuccess(true);
        if (isLogin) {
          router.push("/Profile");
        }else{
          router.push("/CalculateEmission");
        }
  }

  // const emailVerification=()=>{
  //   sendEmailVerification(auth.currentUser)
  // .then(() => {
  //         db.collection("users")
  //           .doc(auth.currentUser.uid)
  //           .update({
  //             emailVerified: true,
  //           })
  //           .then(() => {
  //             console.log("date updated in database");
  //           })
  //           .catch((error) => {
  //             console.log(error);
  //           });
  // });
  // }

  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        console.log(auth.currentUser);
        dispatch(userActions.login(auth.currentUser.uid));
        userDataHandler(auth.currentUser.uid)
        db.collection("users")
          .doc(auth.currentUser.uid)
          .set({
            email: auth.currentUser.email,
            emailVerified: true,
            isResponded: false,
            lastLogged:
              auth.currentUser.proactiveRefresh.user.metadata.lastSignInTime,
            name: auth.currentUser.displayName,
            photo: auth.currentUser.photoURL,
            responses: {},
            results: {},
            uid: auth.currentUser.uid,
          })
          .then(() => {
            console.log("User stored to database");
          })
          .catch((error) => {
            alert(error.message);
          });
        setIsLoading(false);
        setIsSuccess(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "  " + errorMessage + "  " + email);
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    if (isLogin) {
      // For Signin
      signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) =>  {
          const user = userCredential.user;
          dispatch(userActions.login(user.uid));
          db.collection("users")
            .doc(user.uid)
            .update({
              lastLogged: date,
            })
            .then(() => {
              console.log("date updated in database");
            })
            .catch((error) => {
              console.log(error);
            });
            userDataHandler(user.uid)
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    } else {
      //for Signup
      const enteredName = nameInputRef.current.value;
      createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(userActions.signup(user.uid));
          console.log(auth.currentUser);
          let date = new Date();
          const photo = `https://firebasestorage.googleapis.com/v0/b/decarbonus-c1037.appspot.com/o/profile.png?alt=media&token=b7fb1269-59bd-4e66-b3f5-a5cd268d9840`;
          db.collection("users")
          .doc(user.uid)
          .set({
            email: enteredEmail,
            emailVerified: false,
            isResponded: false,
            lastLogged: date,
            name: enteredName,
            photo: photo,
            responses: {},
            results: {},
            uid: user.uid,
          })
          .then(() => {
            // emailVerification()
            console.log("User stored to database");
          })
          .catch((error) => {
            console.log(error);
          });
          userDataHandler(user.uid);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  };

  return (
    <div
      key="login"
      className="h-150vh sm:h-93vh sm:flex flex-row align- bg-signin-bkg bg-contain bg-no-repeat bg-left"
    >
      <div className="flex flex-col w-full sm:w-3/5 sm:h-80vh items-center text-center pt-0 xl:pt-30">
        <h2 className="w-4/5 sm:w-4/6 text-green-800 font-bold text-5xl sm:text-6xl">
          {isLogin ? "Welcome back" : "Join us in our mission"}
        </h2>
        <div className="rounded-lg overflow-hidden">
          {isLogin ? (
            <Lottie className="h-full" animationData={Login} />
          ) : (
            <Lottie className="h-full" animationData={SignUp} />
          )}
        </div>
      </div>
      {isLoading && (
        <div className="flex w-full sm:w-2/5 sm:h-80vh justify-center items-center bg-white-500/50">
          {" "}
          <Lottie className="h-48" animationData={loading} />{" "}
        </div>
      )}
      {isSuccess && (
        <div className="flex w-full sm:w-2/5 sm:h-80vh justify-center items-center bg-white-500/50">
          {" "}
          <Lottie className="h-48" animationData={success} />{" "}
        </div>
      )}
      {!isLoading && !isSuccess && (
        <div className="flex w-full sm:w-2/5 sm:h-80vh items-center bg-white-500/50">
          <div className="lg:w-4/5 md:w-full text-left px-4 py-6 my-2 border-1 rounded-3xl overflow-hidden transform transition duration-500 sm:m-0  mx-auto">
            <div className="w-full h-full text-gray-800 bg-white-500/50 ">
              <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                <div className="xl:ml-0 xl:w-3/4 lg:w-5/12 md:w-8/12 mt-4 mb-12 md:mb-0">
                  <form>
                    {!isLogin && (
                      <div className="mb-6">
                        <input
                          type="text"
                          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="name"
                          placeholder="Name"
                          ref={nameInputRef}
                        />
                      </div>
                    )}
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="email"
                        placeholder="Email address"
                        ref={emailInputRef}
                      />
                    </div>

                    <div className="mb-6">
                      <input
                        type="password"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="password"
                        placeholder="Password"
                        ref={passwordInputRef}
                      />
                    </div>

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={submitHandler}
                        // onClick={loginHandler}
                        className="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      >
                        {isLogin ? "Log In" : "Sign Up"}
                      </button>

                      <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                        <p className="text-center font-semibold mx-4 mb-0">
                          Or
                        </p>
                      </div>
                      <p className="text-lg mb-0 mr-4 flex p-2 flex-row items-center justify-center">
                        {isLogin ? "Sign in with" : "Sign up with"}
                      </p>

                      <div className="flex flex-row items-center justify-center">
                        <button
                          onClick={signinWithGoogle}
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          className=" flex flex-row items-center p-2 bg-transparent-600 text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-white-800 hover:shadow-lg focus:bg-white-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="30"
                            height="30"
                            viewBox="0 0 48 48"
                          >
                            <path
                              fill="#fbc02d"
                              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                            ></path>
                            <path
                              fill="#e53935"
                              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                            ></path>
                            <path
                              fill="#4caf50"
                              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                            ></path>
                            <path
                              fill="#1565c0"
                              d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                            ></path>
                          </svg>{" "}
                          <p className="text-gray-800 px-3">
                            {" "}
                            Sign Up with Google
                          </p>
                        </button>
                      </div>
                      <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                        {isLogin
                          ? "Do not have an acount?"
                          : "Already have an account?"}
                        <a
                          onClick={switchAuthModeHandler}
                          className="text-green-600 hover:text-green-800 focus:text-green-800 transition duration-200 ease-in-out px-2 hover:cursor-pointer"
                        >
                          {isLogin ? "Create account" : "Log In"}
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
