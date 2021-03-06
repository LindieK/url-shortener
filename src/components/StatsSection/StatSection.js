import React, { useState, useEffect } from "react";

import Form from "../Form/Form";
import ResultList from "../ResultList/ResultList";
import StatsIntroText from "../StatsIntroText/StatsIntroText";
import CardDeck from "../CardDeck/CardDeck";
import { getShortenedURL } from "../../utils/Api";
import { addToArray, clearHistory } from "../../utils/utils";
import "./Statsection.scss";

const StatSection = () => {
  const introSubtitle =
    "Track how your links are performing across the web with our advanced statistics dashboard";

  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formFieldValidState, setFormFieldValid] = useState(true);
  const [shortenedURLState, setShortenedURLs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const stateQueries = JSON.parse(localStorage.getItem("pastQueries"));
      if (stateQueries) {
        setShortenedURLs(stateQueries);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleInputFieldChange = (event) => {
    const value = event.target.value;
    validateField(value);
    setInputValue(value);
  };

  const validateField = (fieldValue) => {
    const urlRegEx =
      /((http|https|ftp):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%;:#-~+&amp/]*[\w@?^=%&amp;/~+#-])?/g;

    if (!fieldValue) {
      setErrorMessage("Field cannot be blank. Please enter a URL.");
      setFormFieldValid(false);
    } else if (!urlRegEx.test(fieldValue)) {
      setErrorMessage("Please enter a valid URL");
      setFormFieldValid(false);
    } else {
      setErrorMessage("");
      setFormFieldValid(true);
    }
  };

  const validateForm = () => {
    return formFieldValidState;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue && validateForm()) {
      setLoading(true);
      getShortenedURL(inputValue)
        .then((response) => {
          const updatedURLs = addToArray(
            shortenedURLState,
            response.data.result
          );
          setLoading(false);
          setShortenedURLs(updatedURLs);
          localStorage.setItem(
            "pastQueries",
            JSON.stringify(shortenedURLState)
          );
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      setErrorMessage("Field cannot be blank. Please enter a URL.");
      return false;
    }
  };

  const handleHistoryButtonClick = () => {
    clearHistory("pastQueries");
    setShortenedURLs([]);
  };

  return (
    <section data-testid="stats" id="stats">
      <Form
        value={inputValue}
        loading={loading}
        onSubmit={handleFormSubmit}
        onChange={handleInputFieldChange}
        errorMessage={errorMessage}
        formFieldValid={formFieldValidState}
      />
      <ResultList
        results={shortenedURLState}
        historyButtonClick={handleHistoryButtonClick}
      />
      <StatsIntroText
        introTitle="Advanced Statistics"
        bodyText={introSubtitle}
      />
      <CardDeck />
    </section>
  );
};
export default StatSection;
