import React from "react";
import PropTypes from "prop-types";

import Result from "../Result/Result";
import Button from "../Button/Button";
import { clearHistory } from "../../utils/utils";
import "./ResultsList.scss";

const ResultList = (props) => {
  const shortenedResults = props.results;
  const listItems = shortenedResults
    ? shortenedResults.map((item) => (
        <Result
          key={item}
          fullLink={item.original_link}
          shortenedLink={item.full_short_link}
        />
      ))
    : "";
  const handleHistoryButtonClick = () => {
    clearHistory("pastQueries");
  };
  
  return (
    <div>
      <div data-testid="results-list" id="results" className="container">
        {listItems}
      </div>
      {shortenedResults && <Button value="Clear History" handleClick={handleHistoryButtonClick}/>}
    </div>
  );
};
export default ResultList;
ResultList.propTypes = {
  results: PropTypes.array,
};
