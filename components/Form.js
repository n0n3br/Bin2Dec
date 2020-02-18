import React from "react";

const Form = ({ value, handleChange, handleKeyDown }) => {
  return (
    <form>
      <div className="field">
        <div className="control">
          <input
            className="input"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            maxlength="8"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
