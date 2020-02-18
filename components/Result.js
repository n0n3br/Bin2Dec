import React from "react";
import styled from "styled-components";

const ResultContainer = styled.div`
  margin-top: 20px;
`;

const Result = ({ value }) => {
  if (!value) return null;
  const result = parseInt(value, 2);
  return (
    <ResultContainer>
      <div className="subtitle">The equivalent decimal value is {result}</div>
    </ResultContainer>
  );
};

export default Result;
