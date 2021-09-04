import React from "react";
import PropTypes from "prop-types";

import Result from "../Result/Result";
import "./ResultsList.scss";

const ResultList = (props) => {
  const shortenedResults = props.results;
  const listItems =
    shortenedResults &&
    shortenedResults.map((item) => (
      <Result
        fullLink={item.original_link}
        shortenedLink={item.full_short_link}
      />
    ));
  return (
    <div data-testid="results-list" id="results" className="container">
      {listItems}
    </div>
  );
};
export default ResultList;
ResultList.propTypes = {
  results: PropTypes.string,
};
