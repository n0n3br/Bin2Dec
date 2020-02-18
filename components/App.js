import React, { useState } from "react";
import Snackbar from "./Snackbar";
import Result from "./Result";
import Form from "./Form";

const App = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleKeyDown = event => {
    const { keyCode, key } = event;
    if (![8, 48, 49, 46, 37, 39, 96, 97].find(k => k === keyCode)) {
      setError(`Invalid key ${key} pressed`);
      event.preventDefault();
      return;
    }
    setError("");
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered is-one-third-desktop">
          <div className="columns">
            <div className="column is-one-third-desktop is-offset-one-third-desktop">
              <div className="title">Bin2Dec</div>
              <div className="subtitle">Enter the binary value</div>
              <Form
                value={value}
                handleChange={handleChange}
                handleKeyDown={handleKeyDown}
              />
              <Result value={value} />
              <Snackbar
                message={error}
                type="danger"
                handleClose={() => setError("")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
