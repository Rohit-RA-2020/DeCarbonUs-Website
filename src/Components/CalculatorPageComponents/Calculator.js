import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import air from "../../../public/Assets/Animations/calculator_animations/air_travel.json";
import diet from "../../../public/Assets/Animations/calculator_animations/diet.json";
import car from "../../../public/Assets/Animations/calculator_animations/car.json";
import fuel from "../../../public/Assets/Animations/calculator_animations/fuel.json";
import shopping from "../../../public/Assets/Animations/calculator_animations/shopping.json";
import home from "../../../public/Assets/Animations/calculator_animations/home.json";
import members from "../../../public/Assets/Animations/calculator_animations/members.json";
import pet from "../../../public/Assets/Animations/calculator_animations/pet.json";
import renew_energy from "../../../public/Assets/Animations/calculator_animations/renew_energy.json";
import Modal from "../../../src/UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/auth"
import { db } from "../../../src/Firebase";

let a = 0;
let b = 1;
let responses = {};
let results = {};
const questions = [
  {
    id: 1,
    question: "How often do you travel by air in a year ?",
    options: ["I fly rarely", "Occasionally", "Regularly", "Never"],
    animation: air,
  },
  {
    id: 2,
    question: "What describes your diet ?",
    options: [
      "Vegan",
      "Vegetarian",
      "Pescetarian",
      "Ocassionaly eat meat",
      "Regularly eat meat",
    ],
    animation: diet,
  },
  {
    id: 3,
    question: "How much do you travel by car ?",
    options: [
      "I don't drive",
      "~5000 km",
      "~ 5,000 - 10000 km",
      "~ 10,000 - 15,000 km",
      ">15,000 km",
    ],
    animation: car,
  },
  {
    id: 4,
    question: "Which kind of fuel do you use ?",
    options: ["Electric", "Natural gas", "Petrol, Diesel"],
    animation: fuel,
  },
  {
    id: 5,
    question: "Tell us something about your shopping habits ?",
    options: ["Rarely", "Average", "Shopper", "Luxary Shopper"],
    animation: shopping,
  },
  {
    id: 6,
    question: "How big is your home ?",
    options: [
      "Sharing",
      "One-Bedroom",
      "Two-bedroom",
      "Three-bedroom",
      "Bunglow",
    ],
    animation: home,
  },
  {
    id: 7,
    question: "How many people live in your home ?",
    options: ["Just me", "2 people", "3 people", "4-6 people", " > 7 people"],
    animation: members,
  },
  {
    id: 8,
    question: "Which pet do you own ?",
    options: ["None", "Cat", "Dog", "Other"],
    animation: pet,
  },
  {
    id: 9,
    question: "Do you use renewable energy sources at your home ?",
    options: ["Yes", "Not Yet", "Not Sure"],
    animation: renew_energy,
  },
];

const Calculate = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.user.isAuthenticated);
  const uid = useSelector((state) => state.user.token);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isQuestionIndex, setIsQuestionIndex] = useState(questions[a]);
  const [showPrev, setShowPrev] = useState(false);
  const [isLastQuestion, setisLastQuestion] = useState(false);
  const [distribution, showDistribution] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isResults, setIsResults] = useState({
    result: 0,
    travel: 0,
    diet: 0,
    carTravel: 0,
    fuel: 0,
    homePeople: 0,
    homeSize: 0,
    pet: 0,
    shopping: 0,
  });

  useEffect(() => {
    setShowModal(true);
    console.log(isQuestionIndex.options)
  }, []);

  function optionClickHandler(qIndex, oIndex) {
    responses[`${qIndex}`] = oIndex;
    console.log(oIndex);
    console.log(responses);
  }
  const skipClickHandler = (event) => {
    event.preventDefault();
    setIsQuestionIndex(questions[++a]);
    b++;
  };
  const prevClickHandler = (event) => {
    event.preventDefault();
    setIsQuestionIndex(questions[--a]);
    b--;
    if (a === 0) {
      setShowPrev(false);
    }
  };
  const nextClickHandler = (event) => {
    event.preventDefault();
    setIsQuestionIndex(questions[++a]);
    b++;
    if (a === 8) {
      setisLastQuestion(true);
    } else if (a !== 0) {
      setShowPrev(true);
    }
  };

  const distributionHandler = (event) => {
    event.preventDefault();
    showDistribution(!distribution);
  };
  const calculateagainHandler = (event) => {
    event.preventDefault();
    setIsSubmitted(false);
    a = 0;
    b = 1;
    setIsQuestionIndex(questions[a]);
    setisLastQuestion(false);
  };

  const rdata = (ans) => {
    setIsResults({
      result: ans.result,
      travel: ans.travel,
      diet: ans.diet,
      carTravel: ans.carTravel,
      fuel: ans.fuel,
      homePeople: ans.homePeople,
      homeSize: ans.homeSize,
      pet: ans.pet,
      shopping: ans.shopping,
    });
    results = {
      result: ans.result,
      travel: ans.travel,
      diet: ans.diet,
      carTravel: ans.carTravel,
      fuel: ans.fuel,
      homePeople: ans.homePeople,
      homeSize: ans.homeSize,
      pet: ans.pet,
      shopping: ans.shopping,
    };
  };
  const submitClickHandler = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    const axios = require("axios").default;
    axios
    .post("https://api-account-345807.el.r.appspot.com/calculate", responses)
    .then(function (response) {
      rdata(response.data);
      if (show) {
        db.collection("users")
        .doc(uid)
        .update({
          isResponded: true,
          responses: responses,
          results: results,
        })
        .then(() => {
          console.log("Ressponses Submitted");
          dispatch(userActions.settingUserResults(results));
            })
            .catch((error) => {
              alert(error.message);
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div
      key="calculator"
      className="w-full sm:w-2/3 h-88vh text-gray-800 flex flex-col mx-auto text-center"
    >
      <div className=" text-2xl sm:text-4xl mb-10 font-bold text-green-800">
        <h1>Calculate your carbon footprint</h1>
      </div>
      <div className="w-full flex flex-col sm:flex-row  mx-auto text-center">
        <div className="flex w-full sm:w-2/5 justify-center align-middle my-auto">
          <Lottie
            className="w-2/3"
            animationData={isQuestionIndex.animation}
          />
        </div>
        <div className="w-full sm:w-3/5">
          {!isSubmitted && (
            <div>
              <div className="my-5">
                <h1 className="text-xl w-4/5 sm:w-full mx-auto font-bold">
                  {b}.&nbsp;{isQuestionIndex.question}
                </h1>
              </div>
              <div className="flex flex-col w-4/5 sm:w-1/2 mx-auto">
                {isQuestionIndex.options.map((option, index) => {
                  return (
                    <button
                      className="p-5 hover:bg-green-600 hover:text-white focus:bg-green-600 my-2"
                      onClick={() => optionClickHandler(a, index)}
                      key={index}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {!isLastQuestion && (
                <div className="flex flex-row justify-between  w-4/5 sm:w-1/2 mx-auto">
                  {showPrev && (
                    <button
                      className="py-3 px-6 bg-gray-300 my-2 rounded-md active:bg-gray-700 active:text-white sm:hover:bg-gray-700 sm:hover:text-white"
                      onClick={prevClickHandler}
                    >
                      Prev
                    </button>
                  )}
                  <button
                    className="py-3 px-6 bg-gray-300 my-2 rounded-md active:bg-gray-700 active:text-white sm:hover:bg-gray-700 sm:hover:text-white"
                    onClick={skipClickHandler}
                  >
                    Skip
                  </button>
                  <button
                    className="py-3 px-6 bg-gray-300 my-2 rounded-md active:bg-gray-700 active:text-white sm:hover:bg-gray-700 sm:hover:text-white"
                    onClick={nextClickHandler}
                  >
                    Next
                  </button>
                </div>
              )}
              {isLastQuestion && (
                <div>
                  <button
                    className="py-3 px-6 bg-gray-300 my-2 rounded-md active:bg-gray-700 active:text-white sm:hover:bg-gray-700 sm:hover:text-white"
                    onClick={submitClickHandler}
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          )}
          {isSubmitted && (
            <div className="">
              <div className="text-green-600">
                <h1 className="text-5xl font-bold">{isResults.result}</h1>
                <p>tonns/year</p>
              </div>

              {distribution && (
                <div>
                  <p>
                    Travel: <b>{isResults.travel}</b>
                  </p>
                  <p>
                    Diet: <b>{isResults.diet}</b>
                  </p>
                  <p>
                    Car Travel:<b>{isResults.carTravel}</b>
                  </p>
                  <p>
                    Fuel: <b>{isResults.fuel}</b>
                  </p>
                  <p>
                    Home People: <b>{isResults.homePeople}</b>
                  </p>
                  <p>
                    Home Size: <b>{isResults.homeSize}</b>
                  </p>
                  <p>
                    Pet: <b>{isResults.pet}</b>
                  </p>
                  <p>
                    Shopping: <b>{isResults.shopping}</b>
                  </p>
                </div>
              )}

              <div className="flex flex-row justify-between  w-5/6 sm:w-3/5 mx-auto">
                <button
                  className="py-3 px-4 bg-gray-300 my-2 rounded-md hover:bg-green-700"
                  onClick={distributionHandler}
                >
                  {!distribution ? "Show Distribution" : "Collapse"}
                </button>
                <button
                  className="py-3 px-4 bg-gray-300 my-2 rounded-md hover:bg-green-700"
                  onClick={calculateagainHandler}
                >
                  Calculate again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        className="text-green-800 my-10"
        onClick={() => setShowModal(true)}
      >
        {" "}
        Read more about carbon footprint...{" "}
      </button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad rem qui
          atque veniam recusandae iure nihil ducimus. Ut earum voluptate eveniet
          unde explicabo nisi maxime.
        </p>
      </Modal>
    </div>
  );
};

export default Calculate;
