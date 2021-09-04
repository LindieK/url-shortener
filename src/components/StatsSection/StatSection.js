import React, { useState, useEffect } from "react";

import Form from "../Form/Form";
import ResultList from "../ResultList/ResultList";
import StatsIntroText from "../StatsIntroText/StatsIntroText";
import CardDeck from "../CardDeck/CardDeck";
import { getShortenedURL } from "../../Api";
import "./Statsection.scss";

const StatSection = () => {
  const introSubtitle =
    "Track how your links are performing across the web with our advanced statistics dashboard";

  const [inputValueState, setInputValue] = useState("");
  const [errorMessageState, setErrorMessage] = useState("");
  const [formFieldValidState, setFormFieldValid] = useState(true);
  const [formValidState, setFormValid] = useState(true);
  const [shortenedURLState, setShortenedURLs] = useState([]);

  const { inputValueField } = inputValueState;
  const { errorMsg } = errorMessageState;
  const { formValidation } = formValidState;
  const { formFieldValidation } = formFieldValidState;
  const { shortURLs } = shortenedURLState;

  useEffect(() => {
    try {
      const stateQueries = JSON.parse(localStorage.getItem("pastQueries"));
      if (stateQueries) {
        setShortenedURLs({
          shortenedURLState: stateQueries,
        });
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleInputFieldChange = (event) => {
    const value = event.target.value;
    setInputValue(
      {
        inputValueState: value,
      },
      () => {
        validateField(value);
      }
    );
  };

  const validateField = (fieldValue) => {
    const urlRegEx =
      /((http|https|ftp):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%;:#-~+&amp/]*[\w@?^=%&amp;/~+#-])?/g;

    if (!fieldValue) {
      setErrorMessage({
        errorMessageState: "Field cannot be blank. Please enter a URL.",
      });
      setFormFieldValid({
        formFieldValidState: false,
      });
    } else if (!urlRegEx.test(fieldValue)) {
      setErrorMessage({
        errorMessageState: "Please enter a valid URL",
      });
      setFormFieldValid({
        formFieldValidState: false,
      });
    } else {
      setErrorMessage({
        errorMessageState: "",
      });
      setFormFieldValid({
        formFieldValidState: true,
      });
    }
  };

  const validateForm = () => {
    setFormValid({
      formValidState: formFieldValidation,
    });
    return formValidation;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      getShortenedURL(inputValueField)
        .then((response) => {
          setShortenedURLs((prevState) => ({
            shortURLs: [...prevState.shortURLs, response.data.result],
          }));
          localStorage.setItem("pastQueries", JSON.stringify(shortURLs));
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section data-testid="stats" id="stats">
      <Form
        value={inputValueField}
        onSubmit={handleFormSubmit}
        onChange={handleInputFieldChange}
        errorMessageState={errorMsg}
        formFieldValidState={formFieldValidation}
      />
      <ResultList results={shortURLs} />
      <StatsIntroText
        introTitle="Advanced Statistics"
        bodyText={introSubtitle}
      />
      <CardDeck />
    </section>
  );
};
export default StatSection;
