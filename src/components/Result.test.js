import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Result from "./Result";

it("shows the right result", () => {
  const { container, rerender } = render(<Result value="10" />);
  const result = container.querySelector("#result");
  expect(result.textContent).toBe("2");
  rerender(<Result value="110" />);
  expect(result.textContent).toBe("6");
});
it("doesn't show a result when no value is passed", () => {
  const { container } = render(<Result />);
  const result = container.querySelector("#result");
  console.log(result);
  expect(result).toBeNull();
});
