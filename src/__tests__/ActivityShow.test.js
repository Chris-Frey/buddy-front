import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ActivityShow from "../pages/ActivityShow";
import user from "../mockUsers";

describe("<ActivityShow/1 />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/ActivityShow/1"]}>
        <Routes>
          <Route
            path="/ActivityShow/:id"
            element={<ActivityShow activities={user} />}
          />
          //Users are the placeholder until we have the actual activities
        </Routes>
      </MemoryRouter>
    );
  });

  it("has a button", () => {
    expect(
      screen.getByRole("button", {
        name: /\+/i,
      })
    ).toBeInTheDocument;
  });

  it("has a '+' symbol", () => {
    expect(screen.getByText(/\+/i)).toBeInTheDocument;
  });

  it("has Your Activity text", () => {
    expect(screen.getByText(/\Your Activity/i)).toBeInTheDocument;
  });

  it("has category name", () => {
    expect(screen.getAllByText(/padge/i));
  });

  it("has event text", () => {
      expect(screen.getAllByText(/event/i));
    });

  it("has time text", () => {
    expect(screen.getByText(/time/i));
  });

  it("has the numerical time showing", () => {
    expect(
      screen.getByRole("heading", {
        name: /18:00/i,
      })
    );
  });

  it("has duration text", () => {
    expect(screen.getByText(/duration/i));
  });

  it("has location text", () => {
    expect(screen.getByText(/location/i));
  });

  it("has attendees text", () => {
    expect(screen.getByText(/attendees/i));
  });

  it("has name text", () => {
    expect(screen.getByRole("heading", {name: /3/i})
    )})

  it("has info text", () => {
    expect(screen.getByText(/info/i));
  })

  it("has a button", () => {
    expect(
      screen.getByRole("button", {
        name: /buddy up/i,
      })
    );})

  it("has Buddy Up text", () => {
      expect(screen.getByText(/buddy up/i));
    });
  });
