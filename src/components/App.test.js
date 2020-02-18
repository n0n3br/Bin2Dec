import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

it("renders without crash", () => {
  render(<App />);
});

it("has the input focused on start", () => {
  const { container } = render(<App />);
  const input = container.querySelector("input");
  expect(document.activeElement).toBe(input);
});

it("doesn't accept invalid keys", () => {
  const { container, queryByText } = render(<App />);
  const input = container.querySelector("input");
  fireEvent.keyDown(input, { key: "a" });
  expect(input.value).toBe("");
  fireEvent.keyDown(input, { key: "5" });
  expect(input.value).toBe("");
});

it("show error snackbar when no allowed keys are pressed", () => {
  const { container, queryByText } = render(<App />);
  const input = container.querySelector("input");
  fireEvent.keyDown(input, { key: "a" });
  expect(queryByText("Invalid key a pressed")).not.toBeNull();
});
