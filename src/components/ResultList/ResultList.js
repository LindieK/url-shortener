import React from "react";
import PropTypes from "prop-types";

import Result from "../Result/Result";
import Button from "../Button/Button";
import "./ResultsList.scss";

const ResultList = (props) => {
  const shortenedResults = props.results;
  const listItems = shortenedResults
    ? shortenedResults.map((item) => (
        <Result
          key={item.code}
          fullLink={item.original_link}
          shortenedLink={item.full_short_link}
        />
      ))
    : "";
  const handleHistoryButtonClick = props.historyButtonClick;

  return (
    <div id="results-container">
      <div data-testid="results-list" id="results" className="container">
        {listItems}
      </div>
      {listItems.length > 0 && (
        <Button
          value="Clear History"
          classNames="historyBtn"
          handleClick={handleHistoryButtonClick}
        />
      )}
    </div>
  );
};
export default ResultList;
ResultList.propTypes = {
  results: PropTypes.array,
};
