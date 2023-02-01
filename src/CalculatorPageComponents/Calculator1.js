import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import air from "../../public/Assets/Animations/calculator_animations/air_travel.json";
import diet from "../../public/Assets/Animations/calculator_animations/diet.json";
import car from "../../public/Assets/Animations/calculator_animations/car.json";
import fuel from "../../public/Assets/Animations/calculator_animations/fuel.json";
import shopping from "../../public/Assets/Animations/calculator_animations/shopping.json";
import home from "../../public/Assets/Animations/calculator_animations/home.json";
import members from "../../public/Assets/Animations/calculator_animations/members.json";
import pet from "../../public/Assets/Animations/calculator_animations/pet.json";
import renew_energy from "../../public/Assets/Animations/calculator_animations/renew_energy.json";
import Modal from "../../src/UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store/auth";
import { db } from "../../src/Firebase";

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

const Calculator1 = () => {
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
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(rdata);
  };

  return (
    <>
      <div>
        <h1 className="text-3xl text-green-700 text-center font-bold">
          Calculate your Carbon Emission
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className="text-gray-500 w-full sm:w-1/2">
            <Lottie
              className="h-30vh sm:h-full w-1/2 sm:w-full"
              animationData={isQuestionIndex.animation}
            />
          </div>
          <div className="text-gray-500 w-full sm:w-1/2">
            <div className="my-5">
              <h1 className="text-xl w-4/5 sm:w-full mx-auto font-bold">
                {b}.&nbsp;{isQuestionIndex.question}
              </h1>
            </div>
            <div>
              {isQuestionIndex.options.map((option, index) => {
                return (
                  <div className="p-5 hover:bg-green-600 hover:text-white">
                    {option}
                  </div>
                );
              })}
            </div>
            <button
              className="p-5 bg-gray-500"
              onClick={skipClickHandler}
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Calculator1;
