import React from "react";

const Form = ({ value, handleChange, handleKeyDown }) => {
  return (
    <form>
      <div className="field">
        <div className="control">
          <input
            className="input is-primary has-text-centered"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            maxLength="8"
            autoFocus
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
