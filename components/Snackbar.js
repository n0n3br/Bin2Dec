import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 90;
`;

const Snackbar = ({ type, message, handleClose }) => {
  return (
    message && (
      <Container>
        <div className="columns">
          <div className="column is-half-mobile is-offset-one-quarter-mobile is-one-third-desktop is-offset-one-third-desktop">
            <div className={`notification ${type ? "is-" + type : ""}`}>
              <button className="delete" onClick={handleClose} />
              {message}
            </div>
          </div>
        </div>
      </Container>
    )
  );
};

export default Snackbar;
