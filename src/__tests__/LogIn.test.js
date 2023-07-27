import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LogIn from "../pages/LogIn";

describe("<LogIn />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter initialEntries={["LogIn"]}>
        <LogIn />
      </BrowserRouter>
    );
  });

  it("has Email Text", () => {
    screen.getByText(/email/i).toBeInTheDocument;
  });

  it("has textbox", () => {
    screen.getByRole("textbox", {
      name: /email/i,
    }).toBeInTheDocument;
  });

  it("has Password Text", () => {
    screen.getAllByText(/password/i).toBeInTheDocument;
  });

  it("has Password label", () => {
    screen.getByLabelText(/password/i).toBeInTheDocument;
  });

  it("has Sign In Link", () => {
    screen.getByRole("link", { name: /sign in/i }).toBeInTheDocument;
  });

  it("has Sign In button", () => {
    screen.getByRole("button", { name: /sign in/i }).toBeInTheDocument;
  });

  it("has Sign In Text", () => {
    screen.getByText(/sign in/i).toBeInTheDocument;
  });

  it("has Sign Up Link", () => {
    screen.getByRole("link", { name: /sign up/i }).toBeInTheDocument;
  });

  it("has Sign Up button", () => {
    screen.getByRole("button", { name: /sign up/i }).toBeInTheDocument;
  });

  it("has Sign Up Text", () => {
    screen.getByText(/sign up/i).toBeInTheDocument;
  });

  it("has Sign Up Text", () => {
    screen.getByRole("link", { name: /forgot password/i }).toBeInTheDocument;
  });
});
