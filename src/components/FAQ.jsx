import { useState } from "react";
import { FaqIcon, DownArrow } from "../assets";
import { faq } from "../constants";
import "../css/faq.css";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAnswer = (questionId) => {
    setOpenQuestion((prevQuestion) =>
      prevQuestion === questionId ? null : questionId
    );
  };

  return (
    <div className="block">
      <section className="faq">
        <div className="faq-left-container">
          <div className="icon-parent">
            <h3>
              Frequently Asked <br /> Questions
              <img src={FaqIcon} alt="icon" className="icon" />
            </h3>
          </div>
          <p>
            For more information, please visit the
            <span className="help-center"> Help Center.</span> Also find all
            faq's on our faq's page
          </p>
          <button className="home-btn home-btn-blue">Go to FAQs</button>
        </div>
        <div className="faq-right-container">
          {faq.map((item) => {
            const { id, question, answer } = item;
            return (
              <div key={`hrt${id}`} className="faq-item">
                <div
                  className={`question ${openQuestion === id ? "open" : ""}`}
                  onClick={() => toggleAnswer(id)}
                >
                  <p>{question}</p>
                  <span>
                    <img
                      src={DownArrow}
                      alt="down arrow logo"
                      width="13px"
                      height="6.5px"
                    />
                  </span>
                </div>
                {/* <div>
                  <p>{answer}</p>
                </div> */}
                {openQuestion === id && <div className="answer">{answer}</div>}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
