import React from "react";
import "./footer.css";
import { useRef } from "react";
import Input from "./Input";
// import Modal from "./Modal";
const Refrence = () => {
  // const modal = useRef();
  const name = useRef();
  const message = useRef();
  const subject = useRef();
  const email = useRef();

  // if(enteredEmail.trim() = ""){
  // modal.current.open();
  // }
  // else if(enteredName.trim() = "" ){
  // modal.current.open();
  // }
  // else if( enteredMessage.trim() = ""){
  //   modal.current.open();
  // }
  // else if(enteredSubject.trim() = ""){
  //   modal.current.open();
  // }
  // else{
  //   modal.current.open
  // }

  function handleClick() {
    const enteredName = name.current.value;
    const enteredMessage = message.current.value;
    const enteredSubject = subject.current.value;
    const enteredEmail = email.current.value;

    console.log(enteredEmail);
    console.log(enteredMessage);
    console.log(enteredName);
    console.log(enteredSubject);
  }
  return (
    <>
      {/* <Modal ref={modal}>
        <h1>oops wrong inout</h1>
      </Modal> */}
      <div className="footer__container">
        <div className="Header">
          <h2>
            lets <br />
            discuss <br />
            your
            <br /> project
          </h2>

          <li>09152580773</li>

          <li>TomoteleChristopher@gmail.com</li>
          <li>Lagos nigeria</li>
        </div>

        <div>
          <div className="contact__form">
            <h3>
              what do you have to do? get in touch with me always available if
              the right project come along with me
            </h3>
            <form>
              <Input ref={name} label="Name" />
              <Input ref={subject} label="subject" />
              <Input ref={email} label="email" />
              <Input ref={message} label="message" />
              <button type="button" onClick={handleClick}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refrence;
