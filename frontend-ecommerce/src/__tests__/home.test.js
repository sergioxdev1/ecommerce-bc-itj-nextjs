import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/index";

jest.mock("next/router", () => require("next-router-mock"));

describe("Home page", () => {
  it("renders a heading with the store name", () => {
    render(<Home name="ITJ Funko Store" />);

    const heading = screen.getByRole("heading", {
      name: "ITJ Funko Store",
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders a summary with the store summary", () => {
    render(<Home summary="Welcome to this simple and improvised shop for ITJ fullstack bootcamp project." />);

    const summary = screen.getByText("Welcome to this simple and improvised shop for ITJ fullstack bootcamp project.");

    expect(summary).toBeInTheDocument();
  });

});
