import { useState } from "react";
import "./App.css";

const questions = [
  "Is this a good product?",
  "How much does it cost?",
  "When can I get it?",
];

function DisplayQuestions() {
  const [isOpen, setIsOpen] = useState(false);
  function displayAnswer() {
    setIsOpen(() => !isOpen);
  }
  return (
    <div className="question-list">
      {questions.map((que) => (
        <div className="question-block">
          <p className="question-place">{que}</p>
          {isOpen && (
            <p className="answer-block">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              facere in labore maxime, assumenda iure sed tenetur alias omnis
              eveniet similique laborum, neque porro unde ducimus officiis animi
              vitae! Quidem.
            </p>
          )}
          <p className="collapse" onClick={displayAnswer}>
            {" "}
            {isOpen ? "-" : "+"}{" "}
          </p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <section className="faq">
        <h1>Project 2: FAQ/Accordion</h1>
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <DisplayQuestions />
        </div>
      </section>
    </>
  );
}

export default App;
