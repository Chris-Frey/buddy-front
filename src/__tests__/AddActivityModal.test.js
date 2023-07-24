import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import AddActivityModal from '../components/AddActivityModal/AddActivityModal';


describe("<AddActivityModal />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <AddActivityModal />
    </BrowserRouter>
  )})

  it("has a button", () => {
    expect(screen.getByRole('button', {
      name: /\+/i
    })).toBeInTheDocument
  })

  it("has a '+' symbol", () => {
    expect(screen.getByText(/\+/i)).toBeInTheDocument
  })

  it("has create an activity text", () => {
    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    expect(screen.getByText(/create an activity/i)).toBeInTheDocument
  })  

})