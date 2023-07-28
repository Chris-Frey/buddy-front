import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";

describe("<SignUp />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter initialEntries={["SignUp"]}>
        <SignUp />
      </BrowserRouter>
    );
  });

  it("has Email Text", () => {
    screen.getByText(/email/i).toBeInTheDocument;
  });

  it("has Email textbox", () => {
    screen.getByRole("textbox", { name: /email/i }).toBeInTheDocument;
  });

  it("has clear button", () => {
    screen.getAllByRole("button", { name: /clear/i }).toBeInTheDocument;
  });

  it("has Name text", () => {
    screen.getAllByText(/name/i).toBeInTheDocument;
  });

  it("has Name textbox", () => {
    screen.getAllByRole("textbox", { name: /name/i }).toBeInTheDocument;
  });

  it("has Age text", () => {
    screen.getByText(/age/i).toBeInTheDocument;
  });

  it("has Age textbox", () => {
    screen.getByRole("textbox", { name: /age/i }).toBeInTheDocument;
  });

  it("has Required text", () => {
    screen.getByText(/required/i).toBeInTheDocument;
  });

  it("has Username text", () => {
    screen.getAllByText(/username/i).toBeInTheDocument;
  });

  it("has Username textbox", () => {
    screen.getByRole("textbox", { name: /username/i }).toBeInTheDocument;
  });

  it("has Excellent Username text", () => {
    screen.getByText(/excellent username/i).toBeInTheDocument;
  });

  it("has Password text", () => {
    screen.getAllByText(/password/i).toBeInTheDocument;
  });

  it("has Password lable text", () => {
    screen.getAllByLabelText(/password/i).toBeInTheDocument;
  });

  it("has Insecure Password text", () => {
    screen.getAllByText(/insecure password/i).toBeInTheDocument;
  });

  it("has Gender Identity button", () => {
    screen.getByRole("button", { name: /gender identity/i }).toBeInTheDocument;
  });

  it("has Gender Identity text", () => {
    screen.getByText(/gender identity/i).toBeInTheDocument;
  });

  it("has Sign Up link", () => {
    screen.getByRole("link", { name: /sign up/i }).toBeInTheDocument;
  });

  it("has Sign Up button", () => {
    screen.getByRole("button", { name: /sign up/i }).toBeInTheDocument;
  });

  it("has Sign Up text", () => {
    screen.getByText(/sign up/i).toBeInTheDocument;
  });

  it("has LogIn link", () => {
    screen.getByRole("link", { name: /login/i }).toBeInTheDocument;
  });

  it("has LogIn button", () => {
    screen.getByRole("button", { name: /login/i }).toBeInTheDocument;
  });

  it("has LogIn text", () => {
    screen.getByText(/login/i).toBeInTheDocument;
  });
});
