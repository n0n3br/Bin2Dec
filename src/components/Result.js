import React from "react";
import styled from "styled-components";

const ResultContainer = styled.div`
  margin-top: 20px;
`;

const Result = ({ value }) => {
  const result = value ? parseInt(value, 2) : false;
  return (
    <ResultContainer>
      <div className="subtitle">
        {value ? (
          <p>
            The equivalent decimal value is <span id="result">{result}</span>
          </p>
        ) : (
          <p>&nbsp;</p>
        )}
      </div>
    </ResultContainer>
  );
};

export default Result;
