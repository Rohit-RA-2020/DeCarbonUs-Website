import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css"
import Image from "next/image";

// const Backdrop =  <div className="fixed top-0 left-0 w-full h-100vh z-20 bg-gray-100" onClick={props.onClick}> </div>


const Modal = (props) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const handleClose = (event) => {
    event.preventDefault();
    props.onClose();
  };
  const Backdrop = props.show ? (
    <div className={classes.backdrop}> </div>
  ) : null;
  const ModalOverlay = props.show ? (
    <div className={classes.modal}>
        <div className="flex justify-center">
            <h1 className="text-3xl mb-5 text-gray-800">What is Carbon Footprint</h1>
        </div>
      <div className="text-gray-800">{props.children}</div>
      <div className=" flex justify-center ">

      <button onClick={handleClose} className="text-gray-800 px-2 py-2 bg-green-500 rounded-md">Calculate..</button>
      </div>
    </div>
  ) : null;

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return <>
     {ReactDOM.createPortal(
      Backdrop,
      document.getElementById("modal-root")
    )}
    {ReactDOM.createPortal(
      ModalOverlay,
      document.getElementById("modal-root")
    
    )}</>
  } else {
    return null;
  }
};

export default Modal;

// {
//    {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, <h1>This is modal</h1> )}
// }
