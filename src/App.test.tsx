import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const name = screen.getByText(/arcade/i);
  expect(name).toBeInTheDocument();
});
