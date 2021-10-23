import React, { useState } from "react";

import Button from "../Button/Button";
import "./Result.scss";

const Result = (props) => {
  const [buttonText, setButtonText] = useState("Copy");
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleCopyButtonClick = () => {
    setButtonText("Copied");
    setButtonClicked(true);
    navigator.clipboard.writeText(props.shortenedLink);
    setTimeout(() => {
      setButtonText("Copy")
      setButtonClicked(false)
    },5000)
  };

  return (
    <div data-testid="result" className="result">
      <span className="fullLink">{props.fullLink}</span>
      <div className="shortenedDetails">
        <span className="shortenedLink">{props.shortenedLink}</span>
        <Button
          value={buttonText}
          classNames={buttonClicked ? "copied" : ""}
          handleClick={handleCopyButtonClick}
        />
      </div>
    </div>
  );
};
export default Result;
