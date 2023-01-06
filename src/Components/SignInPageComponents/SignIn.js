import Lottie from "lottie-react";
import Login from "../../../public/Assets/Animations/SigninPageAnimations/Login.json"

const SignIn=()=>{
    return <div key="login" className="h-150vh sm:h-93vh sm:flex flex-row align- bg-signin-bkg bg-contain bg-no-repeat bg-left">
    <div className="flex flex-col w-full sm:w-3/5 sm:h-80vh items-center text-center pt-0 xl:pt-30">
      <h2 className="w-4/5 sm:w-4/6 text-green-800 font-bold text-5xl sm:text-6xl">
        Welcome Back 🙏
      </h2>
      <div class="rounded-lg overflow-hidden">
      <Lottie className="h-full" animationData={Login} />
      </div>
    </div>

    <div className="flex w-full sm:w-2/5 sm:h-80vh items-center bg-white-500/50">
      <div className="lg:w-4/5 md:w-full text-left px-4 py-6 my-2 border-1 rounded-3xl overflow-hidden transform transition duration-500 sm:m-0  mx-auto">
        <div class="w-full h-full text-gray-800 bg-white-500/50 ">
          <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">

            <div class="xl:ml-0 xl:w-3/4 lg:w-5/12 md:w-8/12 mt-4 mb-12 md:mb-0">
              <form>
                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                  />
                </div>

                <div class="flex justify-between items-center mb-6">
                  <a href="#!" class="text-gray-800">
                    Forgot password?
                  </a>
                </div>

                <div class="text-center">

                  <button
                    type="button"
                    class="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                  <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p class="text-center font-semibold mx-4 mb-0">Or</p>

                  </div>
                  <p class="text-lg mb-0 mr-4 flex p-2 flex-row items-center justify-center">Sign in with</p>

                  <div class="flex flex-row items-center justify-center">
                    <button
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      class="inline-block p-3 bg-transparent-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-white-800 hover:shadow-lg focus:bg-white-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="48" height="48"
                        viewBox="0 0 48 48">
                        <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                      </svg>
                    </button>
                  </div>
                  <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a
                      href="#!"
                      class="text-green-600 hover:text-green-800 focus:text-green-800 transition duration-200 ease-in-out px-2"
                    >
                      Sign Up
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default SignIn;