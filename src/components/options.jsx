import React from "react";
import PropTypes from "prop-types";

export const Options = ({
  questionId,
  options,
  handleClick,
  isDisabled,
  defaultOptions,
}) => {
  return options.map((op, ok) => (
    <div key={ok} className="group-option">
      <div className="optoins">
        <input
          type="radio"
          name={`q${questionId}op${ok}`}
          value={op[0]}
          onClick={(e) => handleClick(e, questionId, ok)}
          disabled={isDisabled}
          id={`n1q${questionId}op${ok}`}
          defaultChecked={defaultOptions && defaultOptions.includes(op[0])}
        />
        <label htmlFor={`n1q${questionId}op${ok}`}>{op[0]} </label>
      </div>
      <div className="optoins">
        <input
          type="radio"
          name={`q${questionId}op${ok}`}
          value={op[1]}
          onClick={(e) => handleClick(e, questionId, ok)}
          disabled={isDisabled}
          id={`n2q${questionId}op${ok}`}
          defaultChecked={defaultOptions && defaultOptions.includes(op[1])}
        />
        <label htmlFor={`n2q${questionId}op${ok}`}>{op[1]}</label>
      </div>
    </div>
  ));
};

Options.propTypes = {
  questionId: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Options;
